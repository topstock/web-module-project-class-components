import React from 'react';
import './Todo.css';

class Todo extends React.Component {
  constructor (props) {
    super(props);
  }
    
  render() {
      return(
        <div>
          <p>{this.props.task}</p>
        </div>
      );
  }
}
export default Todo