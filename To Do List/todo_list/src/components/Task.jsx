import React from 'react';

const Task = (props) => {
    const { task, index, list, setList } = props;
    const onDelete = () => {
        setList(() => {
            return list.filter(task => list.indexOf(task) !== index)
        });
    };

    const onChange = () => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    }

    return (
        <div className="container">
            <h4>{task.name}</h4>
            <div className="container">
                <label htmlFor="checkbox">Completed?</label>
                <input onChange={onChange} checked={task.isComplete} type="checkbox" />
                <button onClick={onDelete} className="btn btn-sm btn-danger">Delete</button>
            </div>
        </div>
    );
};

export default Task;