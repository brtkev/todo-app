import styles from '../styles/task.module.css'
import { downArrow, cancel, pencil } from './images';
import { useEffect, useState } from 'react';

let clearDescriptionsWasAdded = false;

export default function Task(props) {
    const {index = 1, description, title, deleteTask, _id} = props;
    useEffect(()=> {
        if(!clearDescriptionsWasAdded){
            document.addEventListener('click', clearDescriptions)
            clearDescriptionsWasAdded = true;
        };
        if(index <= 0) throw("Task index cannot be 0 or less");
    }, [index])   

  return(
    <div className={styles.container} _id={_id} >
        <div className={styles.titleBox} style={{zIndex: index}} >
            <h3 className={styles.title} >{title}</h3>
            
            <div className={styles.buttonContainer} >
                <TaskButton 
                    src={pencil} alt="pencil" />
                <TaskButton 
                    onClick={deleteTask}
                    src={cancel} alt="cancel" />
                <TaskButton 
                    onClick={toggleDescription} dropdown-description-button="true"
                    src={downArrow} alt="downArrow" />
            </div>
        </div>
        <div className={styles.description} style={{zIndex: index-1}} >
            {description ? description : "You could add a description about this task "}
        </div>
    </div>
    );
};

const TaskButton = (props) => {
    const {src, alt} = props 
    return(
        <button className={styles.button} {...props} >
            <img src={src} alt={alt} />
        </button>
    );
}

const closeDescriptionsExcept = (currentDescription = undefined) => {
    const descriptionsList = document.querySelectorAll(`.${styles.description}`);
    descriptionsList.forEach( description => {
        if(description !== currentDescription) description.classList.remove(styles.show);
    });
}

const clearDescriptions = (ev) => {
    if(ev.target.closest(`[dropdown-description-button]`)) return;
    if(!ev.target.closest(`.${styles.description}`)) closeDescriptionsExcept();
}

const toggleDescription = (ev) => {
    const currentDescription = ev.target.closest(`.${styles.container}`).children[1];
    currentDescription.classList.toggle(styles.show);
    closeDescriptionsExcept(currentDescription);
}

