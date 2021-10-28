import styles from "../styles/title.module.css"
import { TaskButton } from "./task"
import { plus } from "./images"

export default function Title(props) {
    const {toggleEditor} = props
    return(
        <div className={styles.container} >
            <h1 className={styles.title} >To - Do</h1>
            <TaskButton src={plus} alt="plus icon" className={styles.button} onClick={toggleEditor} />
        </div>
    )
};
