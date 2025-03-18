import React, {useState, ChangeEvent, FormEvent, useEffect} from "react";

//CSS
import styles from './TaskForm.module.css'

//Interface
import {ITask} from '../interfaces/Task'

interface Props {
  btnText: string;
}

const TaskForm = ({ btnText }: Props) => {

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState <string>("")
    const [dificulty, setDificulty] = useState<number>()

const addTaskHandler = () => {

}

const hadleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title") {
        setTitle(e.target.value)
    }else {
        setDificulty(parseInt (e.target.value))
    }
    console.log(title)
    console.log(dificulty)
}

  return (
    <form onSubmit={ addTaskHandler } className={styles.form} >
      <div className={styles.input_container}  >
        <label htmlFor="title">Título</label>
        <input type="text" name="title" placeholder="Título da tarefa" onChange={hadleChange} />
      </div>
      <div className={styles.input_container}  >
        <label htmlFor="dificulty">Dificuldade:</label>
        <input
          type="text"
          name="dificulty"
          placeholder="Dificuldade da tarefa"
          onChange={hadleChange}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
