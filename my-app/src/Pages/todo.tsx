import React,  { FC, ChangeEvent, useState, useEffect } from 'react';
import './todo.css';
import {ITask} from "../interface";
import ToDoTask from '../Components/ToDoTask';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const ToDo: React.FC = () =>{

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);
  
  // const [user, setUser] = useState(() => {
  //     const username = localStorage.getItem("loggedUser");
  //     return username ? JSON.parse(username) :"";
  // });

  const user = useState(localStorage.getItem("loggedUser"));

  const getStoredList = () => {
    const List = localStorage.getItem(user+'task');
    return List ? JSON.parse(List) : [];
  };

  useEffect(()=> {
    // setTodoList(getStoredList());
  })

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
    localStorage.setItem(user+'task', JSON.stringify(todoList));
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
