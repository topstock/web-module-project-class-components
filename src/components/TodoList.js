import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
class TodoList extends React.Component {
  constructor(props) {
      super(props);
  }
  
  render() {
    return (
        <div className='todo-list'>
          {this.props.props.map( item => (
            <Todo handleToggleItem={this.props.handleToggleItem}
             key={item.id} item={item} />
          ))}
        </div>
    );
  }
}

export default TodoList