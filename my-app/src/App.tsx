import React,  { FC, ChangeEvent, useState } from 'react';
import './App.css';
import {ITask} from "./interface";
import ToDoTask from './Components/ToDoTask';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login/login';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const App: FC = () =>{

  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>

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

  // const HandleLogin = ():void => {
  //   const navigate = useNavigate();
  //   navigate("/login");
  // };

  return (
    <div className="App">
      {/* <button onClick={HandleLogin}>Login</button> */}
      <Link to="/login">Login</Link>
      <div className="items">
        <input type="text" placeholder="Task Name" name="task" className="taskInput" onChange={handleChange} value={task}></input>
        <input type="number" placeholder="Time" name="deadline" className="deadlineInput" onChange={handleChange} value={deadline}></input>
        <button className="setButton" onClick={addTask}> Set Task</button>
      </div>
      {/* <Link to="/login">hhhh</Link> */}
      <div className="todo">
        <span className='taskhead'>Tasks</span>
        {todoList.map((task : ITask, key: number)=> {
          return <ToDoTask key={key} task={task} completeTask={completeTask}/>;
        })}
      </div> 
    </div>
  );
}

export default App;
