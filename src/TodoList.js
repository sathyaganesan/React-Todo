import React from 'react';
import Todo from './Todo';
import './components/Todo.css';

const TodoList = (props) => {
    return (
        <div className = "complete-button">
            {props.activitiesAttr.map((item) => (
                <Todo key={item.id} item = {item} toggleAttr={props.toggleAttr}/>
            ))}
            <button onClick={props.completedAttr} className = "complete-button">
                Activity Completed
            </button>
        </div>
    );
};

export default TodoList;