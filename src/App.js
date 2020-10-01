import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const todoActivities = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
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
        <Todo />
        <TodoForm formAttr={this.addNewActivity}/>
        <TodoList
          activitiesAttr={this.state.todoActivities}
          completedAttr={this.activityCompleted}
          toggleAttr = {this.toggleActivity}
        />
        
      </div>
    );
  }
}

export default App;
