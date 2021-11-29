import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  

  render() {
    const todo = [
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
    ]
    ;
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
