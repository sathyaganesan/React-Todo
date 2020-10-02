import React from 'react';
import Todo from './Todo';
import './components/Todo.css';

const TodoList = (props) => {
    return (
        <div className = "complete-button">
            {props.activitiesAttr.map((item) => (
                <Todo key={item.id} item = {item} toggleAttr={props.toggleAttr}/>
            ))}
            <div className = "completed">
                <button onClick={props.completedAttr} >
                    Activity Completed
                </button>
            </div>
            
        </div>
    );
};

export default TodoList;