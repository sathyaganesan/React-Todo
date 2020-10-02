import React from 'react';
import './components/Todo.css';

const Todo = (props) => {
    return (
        <div onClick={() => props.toggleAttr(props.item.id)}
            className = {`activites${props.item.completedclass ? "completedclass" : ""}`}>
            <p className = "activities-styling">{props.item.task}</p>
        </div>
    );
};
export default Todo;

{/* <div onClick={() => props.toggleAttr(props.item.id)}
            className = {`${props.item.completedclass ? "completedclass" : ""}`}>
            <p className = "activities-styling">{props.item.task}</p>
        </div> */}