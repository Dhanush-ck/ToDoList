import React from "react";
import { ITask } from "../interface";

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const ToDoTask = ({task, completeTask}: Props) => {
    return (
        <div className="task">
            <input type="checkbox"></input>
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={()=> {
                completeTask(task.taskName)
            }}>Delete</button>
        </div>
    )
};

export default ToDoTask