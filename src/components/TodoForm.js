import React from 'react';
import { render } from 'react-dom';


// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }


  render() {
    return (
      <form>
          <input type='text' name='item' />
          <button>Add Todo</button>
          <button>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm