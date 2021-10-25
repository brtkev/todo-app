import styles from './styles/App.module.css'
import useDocTitle from './hooks/useDocTitle';
import Todo from './components/todo';

export default function App(){
	useDocTitle("todo app");

	return (
		<div className={styles.container} >
			
			<Todo />
		</div>
	);
}


