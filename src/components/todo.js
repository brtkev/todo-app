import { useEffect, useState } from 'react';
import styles from '../styles/todo.module.css';
import Task from './task';
import Editor from './editor';

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
    const [editorActive, setEditorActive] = useState(false);
    useEffect(() => {
        setTasks(fetchTasks());
    }, [])
    
    const deleteTask = ( ev ) => {
        deleteFromBackend(ev.target.closest('[_id]').attributes._id.value )
        setTasks(fetchTasks());
    }

    const editTask = (ev) => {
        let id = ev.target.closest('[_id]').attributes._id.value;
        alert(`not implemented, trying to edit: ${id}`);
        return
        //open edit window
        edit = 'implement editor'
        updateTaskFromBacked(id, edit);
        setTasks(fetchTasks());        
    }

    const taskComponents = tasks.map((item, index ) => {
        let i = (tasks.length - index) * 2;
        return <Task index={i} key={item._id} {...item} onDelete={deleteTask} onEdit={editTask} />
    })

    const toggleEditor = () => {
        setEditorActive(prevState => !prevState);
    }


    return(
        <div className={styles.container}>
            {taskComponents}
            {editorActive ? <Editor /> : undefined}
        </div>
    )
}

const fetchTasks = () => {
    //should fetch tasks from backend
    return example;
}

const deleteFromBackend = (id) => {
    //should delete from backend
    example = example.filter((item) =>  item._id !== id);
}

const updateTaskFromBacked = (id, edit) => {
    //should update backend
    index = example.findIndex( (item) => item._id === id);
    example[index] = edit;
}