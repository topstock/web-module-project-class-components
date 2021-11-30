import React from 'react';
import { render } from 'react-dom';


// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
class TodoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const handleClick = (e) => {
      e.preventDefault();
      this.props.handleAddItem();
    }

    const handleClearClick = (e) => {
      e.preventDefault();
      this.props.handleClearCompleted();
    }

    const onChange = (e) => {
      this.props.handleChange(e.target.value);
    }
    return (
      <form>
          <input type='text' name='item' onChange={onChange}/>
          <button onClick={handleClick}>Add Todo</button>
          <button onClick={handleClearClick}>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm