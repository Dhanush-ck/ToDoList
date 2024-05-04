import React,  { FC, ChangeEvent, useState } from 'react';
import './App.css';
import {ITask} from "./interface";

const App: FC = () =>{

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setToDoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void  => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    }
    else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setToDoList([...todoList, newTask]);
    console.log(todoList);
  }

  return (
    <div className="App">
      <div className="items">
        <input type="text" placeholder="Task Name" className="task" onChange={handleChange}></input>
        <input type="number" placeholder="Time" className="deadline" onChange={handleChange}></input>
        <button className="setButton" onClick={addTask}> Set Task</button>
      </div>
      <div className="ToDo">
      </div>
    </div>
  );
}

export default App;
