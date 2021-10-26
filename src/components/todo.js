import styles from '../styles/todo.module.css';
import Task from './task';
export default function Todo(){
    const arr = [];
    for(let i = 6; i >=  0; i= i - 2){
        if(i > 0){
            arr.push(<Task key={"taskCard" + i} index={i} />);
        }
    }
    return(
        <div className={styles.container}>
            {arr}
        </div>
    )
}