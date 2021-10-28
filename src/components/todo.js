import styles from '../styles/todo.module.css';
import Task from './task';

export default function Todo(props){
    const {tasks, deleteTask, editTask} = props 

    const taskComponents = tasks.map((item, index ) => {
        let i = (tasks.length - index) * 2;
        return <Task index={i} key={item._id} {...item} onDelete={deleteTask} onEdit={editTask} />
    })


    return(
        <div className={styles.container}>
            {taskComponents}
            
        </div>
    )
}
