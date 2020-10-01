import React from 'react';
import './components/Todo.css';

const Todo = (props) => {
    return (
        <div onClick={() => props.toggleAttr(props.item.id)}>
            <p className = "activities">{props.item.task}</p>
        </div>
    );
};
export default Todo;