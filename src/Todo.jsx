import { useState } from "react";
function Todo() {
    const [tasks, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleAdd = () => {
        if (newTask.trim() !== "") {
            setTask(pre => [...pre, newTask]);
            setNewTask("");
        }
    }
    const remove = (index) => {
        setTask(tasks.filter((ele, i)=> i!==index))
    }
    const edit = (index) => {
        setNewTask()
    }
    const moveUp = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }
    const moveDown = (index) => {
        if (index < tasks.length-1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = 
            [updatedTasks[index+1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }
    return(
        <>
            <div className="box">
                <h1>Todo List</h1>
                <div className="in">
                    <input id="input" type="text" value={newTask} onChange={e => setNewTask(e.target.value)} placeholder="Enter your task..."/>
                    <button onClick={handleAdd}>Add Task</button>
                </div>
                <div className="list">
                    {tasks.map((element, index) => 
                    <div className = "element">
                        <p key={index}>{element}</p>
                        <div className="right">
                            <button onclick = {edit}>Edit</button>
                            <button onClick = {() => remove(index)}>Remove</button>
                            <button onClick = {() => moveUp(index)}>☝️</button>
                            <button onClick = {() => moveDown(index)}>👇</button>
                        </div>
                    </div>)}
                </div>
            </div>
        </>
    );
}
export default Todo;