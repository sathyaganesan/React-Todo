import React from 'react';

const TodoList = (props) => {
    return (
        <div>
            {props.activitiesAttr.map((item) => (
                <item key={item.id} item = {item} toggleAttr={props.toggleAttr}/>
            ))}
            <button onClick = {props.completedAttr}>Activity Completed</button>
        </div>
    );
};

export default TodoList;