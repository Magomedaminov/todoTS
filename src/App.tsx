import React from 'react';
import './App.css';
import TodoList from './components/todoList';

function App() {

  let tasks1 = [
    { id: 1, title: "CSS$html", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false }
  ]

  let tasks2 = [
    { id: 1, title: "Terminator", isDone: true },
    { id: 2, title: "XXX", isDone: true },
    { id: 3, title: "Jentelments of fortune", isDone: false }
  ]
  return (
    <div className="App">
      <TodoList title="learn react" tasks={tasks1}/>
      <TodoList title="Moves" tasks={tasks2}/>
    </div>
  );
}



export default App;
