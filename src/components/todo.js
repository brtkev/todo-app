import styles from '../styles/todo.module.css';
import Task from './task';
export default function Todo(){

    return(
        <div className={styles.container}>
           <Task /> 
        </div>
    )
}