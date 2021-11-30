import React from 'react';
import './Todo.css';

class Todo extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
      const handleClick = () => this.props.handleToggleItem(this.props.item); 
      return(
        <div onClick={handleClick}  className={`${this.props.item.completed ? 'completed' : ''}`}>
          <p>{this.props.item.task}</p>
        </div>
      );
  }
}
export default Todo