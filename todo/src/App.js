import './App.css';
import React from 'react';
import TodoList from './TodoList';
import Nav from './Nav';
import AddTodo from './AddTodo';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      {/* <AddTodo></AddTodo> */}
      <TodoList></TodoList>
    </div>
  );
}

export default App;
