import styles from './styles/App.module.css'
import {useState, useEffect} from 'react';

import useDocTitle from './hooks/useDocTitle';
import Todo from './components/todo';
import Title from './components/title';
import Editor from './components/editor';

let example = [
    { title: "example1", description: "example", _id : "aksjdl1231askdj1", startDate : 1468454651},
    { title: "example2", description: "", _id : "aksjdl1231askdj2", startDate : 1468454651},
    { title: "example3", description: "example", _id : "aksjdl1231askdj3", startDate : 1468454651},
    { title: "example4", description: "", _id : "aksjdl1231askdj4", startDate : 1468454651},
    { title: "example5", description: "example", _id : "aksjdl1231askdj5", startDate : 1468454651},
    { title: "example6", description: "example", _id : "aksjdl1231askdj6", startDate : 1468454651},
];


export default function App(){
	useDocTitle("todo app");
	const [editorActive, setEditorActive] = useState(true);
	const toggleEditor = () => {
        setEditorActive(prevState => !prevState);
    }

	const [tasks, setTasks] = useState([]);
    useEffect(() => {
        setTasks(fetchTasks());
    }, [])

	const addTask = (ev) => {
		ev.preventDefault();
		const form = ev.target;
		const title = form.querySelector(`input[name="title"]`).value
		const description = form.querySelector(`textarea[name="description"]`).value
		appendTask(title, description);
		setTasks(fetchTasks())
		toggleEditor()
	}
    
    const deleteTask = ( ev ) => {
		console.log(ev.target)
		console.log(example)
		console.log(ev.target.closest('[_id]').attributes._id.value )
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

	const todoProps = { tasks, deleteTask, editTask}
	const editorProps = { close : toggleEditor,  addTask}

	return (
		<div className={styles.container} >
			<Title toggleEditor={toggleEditor} />
			<Todo {...todoProps} />
			{editorActive ? <Editor {...editorProps} /> : undefined}
		</div>
	);
}

const appendTask = (title, description = "") => {
	const date = new Date()
	
	const newTask = {
		title, description,
		_id: Math.floor((Math.random() * 1000) + 1).toString(),
		startDate : date.getTime()
	}

	//pushTask to db
	example.unshift(newTask);

}


const fetchTasks = () => {
    //should fetch tasks from backend
    return example;
}

const deleteFromBackend = (id) => {
    //should delete from backend
    example = example.filter((item) =>  item._id !== id);
	console.log(example)
}

const updateTaskFromBacked = (id, edit) => {
    //should update backend
    index = example.findIndex( (item) => item._id === id);
    example[index] = edit;
}