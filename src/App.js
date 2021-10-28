import styles from './styles/App.module.css'
import useDocTitle from './hooks/useDocTitle';
import Todo from './components/todo';
import Title from './components/title';

export default function App(){
	useDocTitle("todo app");

	return (
		<div className={styles.container} >
			<Title />
			<Todo />
		</div>
	);
}


