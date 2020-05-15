//another way to do it
import React, { useState } from 'react';

const Todos = (props) => {
    const [tasks, setTasks] = useState([]);
    const [todoTitle, setTodoTitle] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newTask = {
            title: todoTitle,
            isDone: false
        };

        setTasks([...tasks, newTask]);

        //clear input box
        setTodoTitle("");
    };

    const handleDelete = (delIdx) => {
        const filteredTasks = tasks.filter((task, idx) => {
            return idx !== delIdx;
        });

        setTasks(filteredTasks);

        //shorthand
        // setTasks(tasks.filter((task, idx) => idx !== delIdx;))
    };

    const toggleIsComplete = (idx) => {
        const selectedTask = tasks[idx];
        selectedTask.isDone = !selectedTask.isDone;

        //better way more proper
        // const copiedTask = { ...tasks[idx] };
        // copiedTask.isDone = !copiedTask.isDone;
        // tasks[idx] = copiedTask;

        setTasks([...tasks]);
    };
    return (
        <div>
            <h2>Your Task</h2>

            <form
                //same as below
                // onSubmit ={(event) => {handleSubmit(event);}} 
                onSubmit={handleSubmit}>
                <input type="text" onChange={(event) => {
                    setTodoTitle(event.target.value);
                }}
                />{" "}
                <button>New Task</button>
            </form>

            {tasks.map((task, idx) => {
                return (
                    <div key={idx}>
                        {
                            task.isDone === true ? <span style={{ color: "green" }}>&#10003;</span> : ""
                        }
                        <span className={task.isDone ? "text-green" : ""}>{task.title}</span>{" "}
                        <input
                            type="checkbox"
                            onChange={(event) => { toggleIsComplete(idx); }} />
                        <button
                            onClick={(event) => { handleDelete(idx); }}
                        >Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Todos;