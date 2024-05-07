import React,  { FC, ChangeEvent, useState, useEffect } from 'react';
import './todo.css';
import {ITask} from "../interface";
import ToDoTask from '../Components/ToDoTask';
import { useNavigate } from 'react-router-dom';

const ToDo: React.FC = () =>{

  const navigate = useNavigate();
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const [user, setUser] = useState(localStorage.getItem("loggedUser"));
  // const userName = useState(localStorage.getItem("loggedUserName"));
  const [isLogged, setLog] = useState(user===null);

  const getStoredList = () => {
    const List = localStorage.getItem(user+'task');
    return List ? JSON.parse(List) : [];
  };

  useEffect(()=> {
    setTodoList(getStoredList());
    setLog((user == null));
  },[])

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
  
  const save = (): void => {
    localStorage.setItem(user+'task', JSON.stringify(todoList));
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task)=> {
      return task.taskName !== taskNameToDelete
    }))
  }

  const navigateto = () => {
    if(isLogged) {
      setLog(user == null);
      navigate('/login');
    }
    else {
      setLog(!isLogged);
      localStorage.removeItem("loggedUser");
      setTodoList([]);
    }
  }

  return (
    <div className="App">
      <div className="items">
      {/* <span>{ String(userName)}</span> */}
        <input type="text" placeholder="Task Name" name="task" className="taskInput" onChange={handleChange} value={task}/>
        <input type="number" placeholder="Time" name="deadline" className="deadlineInput" onChange={handleChange} value={deadline}/>
        <button className="setButton" onClick={addTask}> Set Task</button>
        <button className='buttonLogin' onClick={navigateto}>{isLogged ? 'Login': 'Logout'} </button>
      </div>

      <div className="todo">
        <span className='taskhead'>Tasks</span>
        {todoList.map((task : ITask, key: number)=> {
          return <ToDoTask key={key} task={task} completeTask={completeTask}/>;
        })}
        <button onClick={save} className='save'>Save</button>
      </div> 
    </div>
  );
}

export default ToDo;
