import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Mow Lawn',
          id: 1234345645671,
          completed: false
        },
        {
          task: 'Vacuum All Rooms',
          id: 1234345640987,
          completed: false
        }
      ],
      input: ''
    }
  }

  handleChange = inputText => {
    this.setState({
      ...this.state,
      input: inputText
    });
  }

  handleAddItem = () => {
    const newItem = {
      task: this.state.input,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newItem]
    });
  }
  
  handleClearCompleted = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter( t => !t.completed )
    });
  }

  handleToggleItem = (item) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(t => {
        if (t.id === item.id) {
          return {...t, completed: !t.completed}
        } else {
          return t
        }
      })
    })
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList handleToggleItem={this.handleToggleItem} props={this.state.todos} />
        <TodoForm 
        handleClearCompleted={this.handleClearCompleted}
        handleAddItem={this.handleAddItem} 
        props={this.state.todos}
        handleChange={this.handleChange} />
        
      </div>
    );
  }
}

export default App;
