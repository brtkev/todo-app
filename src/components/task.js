import styles from '../styles/task.module.css'
import { useEffect, useState } from 'react';


export default function Task() {

    const [descriptionHeight, setDescriptionHeight] = useState(0);
    useEffect(() => {
        const description = document.getElementsByClassName(styles.container)[0]
        setDescriptionHeight(description.offsetHeight)
        description.style.height = window.innerWidth * 0.05 + "px";
    }, [])

    const downClick = (ev) => {
        const description = ev.target.parentNode.parentNode.parentNode;
        if (description.offsetHeight === descriptionHeight){
            description.style.height = window.innerWidth * 0.05 + "px";
        }else{
            description.style.height = descriptionHeight + 'px';
        }
    }

  return(
    <div className={styles.container}>
        <div className={styles.titleBox} >
            <h3 className={styles.title} >title</h3>
            
            <div>
                <TaskButton>ch</TaskButton>
                <TaskButton>x</TaskButton>
                <TaskButton onClick={downClick} >d</TaskButton>
            </div>
        </div>
        
        <div className={styles.description} >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi sapiente, debitis accusantium molestias dicta harum. Incidunt expedita at, cupiditate corporis magnam dolore reprehenderit delectus consectetur quis, porro, itaque nesciunt laudantium?
        </div>
    </div>
    );
};

const TaskButton = (props) => {

    return(
        <button className={styles.button} {...props} >{props.children}</button>
    );
}