import React,  { FC, ChangeEvent, useState, useEffect } from 'react';
import './todo.css';
import {ITask} from "../interface";
import ToDoTask from '../Components/ToDoTask';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ToDo: React.FC = () =>{

  // useEffect(()=>{
  //   const user = localStorage.getItem("loggedUser");
  //   const tasktodo = localStorage.getItem(user+"task");
  //   // taskt = useState<ITask[]>([]);
  //   // [JSON.parse(tasktodo).taskList, tasktodo.setTasklist]
  // })


  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

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
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task)=> {
      return task.taskName !== taskNameToDelete
    }))
  }

  return (
    <div className="App">
      {/* <button onClick={HandleLogin}>Login</button> */}
      <div className="items">
        <input type="text" placeholder="Task Name" name="task" className="taskInput" onChange={handleChange} value={task}/>
        <input type="number" placeholder="Time" name="deadline" className="deadlineInput" onChange={handleChange} value={deadline}/>
        <button className="setButton" onClick={addTask}> Set Task</button>
        <Link to="/login" className='linkLogin'><button className='buttonLogin'>Login</button></Link>
      </div>

      <div className="todo">
        <span className='taskhead'>Tasks</span>
        {todoList.map((task : ITask, key: number)=> {
          return <ToDoTask key={key} task={task} completeTask={completeTask}/>;
        })}
      </div> 
    </div>
  );
}

export default ToDo;
