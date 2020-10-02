import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './components/Todo.css';

const todoActivities = [
  // {
  //   task: "Organize Garage",
  //   id: 1528817077286,
  //   completed: false
  // },
  // {
  //   task: "Bake Cookies",
  //   id: 1528817084358,
  //   completed: false
  // }
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoActivities
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addNewActivity = (activity) => {
    const newActivity = {
      task: activity,
      id: Date.now(),
      completed: false,
    };
    this.setState({ ...this.state, todoActivities: [...this.state.todoActivities, newActivity] });
  };

  toggleActivity = (toggleItem) => {
    this.setState({ todoActivities: this.state.todoActivities.map((item) => {
      if (toggleItem === item.id) {
        return {
          ...item, completed: !item.completed
        };
      }
      return item;
    })});
  };

  activityCompleted = (e) => { 
    e.preventDefault();
    this.setState({
      ...this.state, todoActivities: this.state.todoActivities.filter((item) => !item.completed)
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm formAttr={this.addNewActivity}/>
        <TodoList
          toggleAttr = {this.toggleActivity}
          activitiesAttr={this.state.todoActivities}
          completedAttr={this.activityCompleted}
        />
        
      </div>
    );
  }
}

export default App;
