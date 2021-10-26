import { useEffect, useState } from 'react';
import styles from '../styles/todo.module.css';
import Task from './task';

let example = [
    { title: "example1", description: "example", _id : "aksjdl1231askdj1", startDate : 1468454651},
    { title: "example2", description: "", _id : "aksjdl1231askdj2", startDate : 1468454651},
    { title: "example3", description: "example", _id : "aksjdl1231askdj3", startDate : 1468454651},
    { title: "example4", description: "", _id : "aksjdl1231askdj4", startDate : 1468454651},
    { title: "example5", description: "example", _id : "aksjdl1231askdj5", startDate : 1468454651},
    { title: "example6", description: "example", _id : "aksjdl1231askdj6", startDate : 1468454651},
];

export default function Todo(){
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        setTasks(fetchTasks());
    }, [])
    
    const deleteTask = ( ev ) => {
        //delete from backend
        let _id = ev.target.closest('[_id]').attributes._id.value; 
        example = example.filter((item) =>  item._id !== _id);

        //fetch backend
    
        //update frontend
        setTasks(example);
    }
    
    const taskComponents = tasks.map((item, index ) => {
        let i = (tasks.length - index) * 2;
        return <Task index={i} key={item._id} {...item} deleteTask={deleteTask} />
    })


    return(
        <div className={styles.container}>
        {taskComponents}
        </div>
    )
}

const fetchTasks = () => {
    //should fetch tasks from backend
    return example;
}

