import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
class TodoList extends React.Component {
  
  render() {
      console.log(this.props);
    return (
        <div className='todo-list'>
          {this.props.props.map( item => (
            <Todo key={item.id} task={item.task} />
          ))}
        </div>
    );
  }
}

export default TodoList