import React from 'react';
import './components/Todo.css';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newActivity: ""
        };
    }

    changeHandler = (e) => {
        console.log(e.target.value);
        this.setState({ ...this.state, newActivity: e.target.value });
    };

    submitForm = (e) => { 
        e.preventDefault();
        this.props.formAttr(this.state.newActivity);
        this.setState({ ...this.state, newActivity: "" });
    };

    render() {
        return (
            <form onSubmit = {this.submitForm}>
                <input type="text"
                    name="todoItem"
                    placeholder="Todo Item"
                    onChange={this.changeHandler}
                    value = {this.state.newActivity}
                />
                <button>Add</button>
            </form>
        );
    }
};

export default TodoForm;