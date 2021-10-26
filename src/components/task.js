import styles from '../styles/task.module.css'
import { downArrow, cancel, pencil } from './images';
import { useEffect } from 'react';

let clearDescriptionsWasAdded = false;

export default function Task({index = 1, description, title, startDate, endDate}) {
    useEffect(()=> {
        if(!clearDescriptionsWasAdded){
            document.addEventListener('click', clearDescriptions)
            clearDescriptionsWasAdded = true;
        };
        if(index <= 0) throw("Task index cannot be 0 or less");
    }, [index])   

  return(
    <div className={styles.container}>
        <div className={styles.titleBox} style={{zIndex: index}} >
            <h3 className={styles.title} >{title}</h3>
            
            <div className={styles.buttonContainer} >
                <TaskButton>
                    <img src={pencil} alt="cancel" />
                </TaskButton>
                <TaskButton>
                    <img src={cancel} alt="cancel" />
                </TaskButton>
                <TaskButton onClick={toggleDescription} dropdown-description-button="true" >
                    <img src={downArrow} alt="downArrow" />
                </TaskButton>
            </div>
        </div>
        <div className={styles.description} style={{zIndex: index-1}} >{description ? description : "You could add a description about this task "}</div>
        
    </div>
    );
};

const TaskButton = (props) => {
    return(
        <button className={styles.button} {...props} >{props.children}</button>
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

