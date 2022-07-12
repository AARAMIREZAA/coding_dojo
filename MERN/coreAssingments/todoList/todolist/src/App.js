import React, {useState} from "react";
import './App.css';

import Todo from './components/todo';

function App() {
  //STATE
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

const hanldeNewToDoSubmit = (event) => {
  event.preventDefault();

  if (newTodo.length === 0) {
    return;
  }

const todoItem = {
  text: newTodo,
  complete: false
}

  setTodos([...todos, todoItem]);
  setNewTodo("");
};

const handleTodoDelete = (delIdx) => {
  const filteredTodos = todos.filter((_todo, i) => {
    return i !== delIdx;
  })

  setTodos(filteredTodos);
}

const handleToggleComplete = (idx) => {
  const updatedTodos = todos.map((todo, i) => {
    if (idx === i) {
      todo.complete = !todo.complete;
      // to avoid mutating the todo directly, do this:
      // const updatedTodo = { ...todo, complete: !todo.complete}
      // return updatedTodo;
    }
    return todo;
  });
  setTodos(updatedTodos);
}

return (
  <div style={{ textAlign:"center" }}>
    <form 
    onSubmit={(event) => {
      hanldeNewToDoSubmit(event);
    }} 
    >
      <input 
      onChange={(event) => {
        setNewTodo(event.target.value);
      }} 
      type="text"
      value={newTodo}
      />
      
      <div>
        <button>Add</button>
      </div>

    </form>

    <hr />

    {todos.map((todo, i) => {
        return (
        <Todo
        key={i} 
        i={i}
        todo={todo} 
        handleToggleComplete={handleToggleComplete} 
        handleTodoDelete={handleTodoDelete}
        />
        );
      })}

  </div>
  );
}

export default App;
