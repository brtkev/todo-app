import styles from '../styles/editor.module.css'
import { cancel } from './images';
import { TaskButton } from './task';

export default function Editor(props) {
    const { close, addTask } = props;
    return(
        <div className={styles.windowContainer} >
            <div className={styles.container} >
                <h2 className={styles.title} >Add new task</h2>
                <form  className={styles.form} onSubmit={addTask} >
                    <label htmlFor="title" >Title</label>
                    <input type="text" name="title" placeholder="add title" required />
                    <label htmlFor="description" >description</label>
                    <textarea name="description" cols="30" rows="5" placeholder="add an optional description" ></textarea>
                    <button type="submit">Add</button>
                </form>
                <TaskButton src={cancel} alt="X icon" className={styles.close} onClick={close} />
            </div>
            
        </div>
    );
};
