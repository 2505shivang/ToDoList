import { useState } from "react";
import Task from "./Task";


const ToDoList = () => {

    const [taskList,setTaskList] = useState([]);
    const [text,setText] = useState("");

    const handledeleteTask = (taskidx) => {
        const newTaskList = taskList.filter((val,idx) => {
            return idx!==taskidx;
        });
        setTaskList(newTaskList);
        console.log(taskList);
    }

    const handleAddTask  = () => {
        console.log(taskList);
        const newTaskList = taskList.slice();
        newTaskList.push(text);
        setTaskList(newTaskList);
        setText("");
    };

    const handleChangeInText = (event) => {
        setText(event.target.value);
    };

    let currentTask = taskList.map((val,idx) => <Task key={idx} discription={val}><button onClick={() => handledeleteTask(idx)}>X</button></Task>)

    return(
        <div>
            <h1>ToDo List:-</h1>
            <div>
                <ul id="taskList">
                    {currentTask}
                </ul>
                <p>Total Task: {taskList.length}</p>
            </div>

            <div>
                <div>
                    <textarea placeholder="Enter your text here" rows={10} cols={100} onChange={handleChangeInText} value={text}></textarea>
                </div>
                <button onClick={handleAddTask}>Add Task</button>
            </div>
        </div>
    );

}

export default ToDoList;