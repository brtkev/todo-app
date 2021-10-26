import styles from '../styles/task.module.css'
import { useEffect, useState } from 'react';

let clearDescriptionsWasAdded = false;
const clearDescriptions = (ev) => {
    if(ev.target.closest(`[dropdown-description-button]`)) return;
    if(!ev.target.closest(`.${styles.description}`)) closeDescriptionsExcept();
}

export default function Task({index}) {
    useEffect(()=> {
        if(!clearDescriptionsWasAdded){
            document.addEventListener('click', clearDescriptions)
            clearDescriptionsWasAdded = true;
        };
    }, [])

    const toggleDescription = (ev) => {
        const currentDescription = ev.target.closest(`.${styles.container}`).children[1];
        currentDescription.classList.toggle(styles.show);
        closeDescriptionsExcept(currentDescription);
    }

  return(
    <div className={styles.container}>
        <div className={styles.titleBox} style={{zIndex: index}} >
            <h3 className={styles.title} >title</h3>
            
            <div>
                <TaskButton>ch</TaskButton>
                <TaskButton>x</TaskButton>
                <TaskButton onClick={toggleDescription} dropdown-description-button="true" >d</TaskButton>
            </div>
        </div>
        
        <div className={styles.description} style={{zIndex: index-1}} >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi sapiente, debitis accusantium molestias dicta harum. Incidunt expedita at, cupiditate corporis magnam dolore reprehenderit delectus consectetur quis, porro, itaque nesciunt laudantium?
        </div>
    </div>
    );
};

export function closeDescriptionsExcept(currentDescription = undefined){
    const descriptionsList = document.querySelectorAll(`.${styles.description}`);
    descriptionsList.forEach( description => {
        if(description !== currentDescription) description.classList.remove(styles.show);
    });
}

const TaskButton = (props) => {
    return(
        <button className={styles.button} {...props} >{props.children}</button>
    );
}