import React, { useState } from 'react';
import { TodoList } from './components/todoList';
import { AddTodoForm } from './components/addTodoForm';

const initTodos:Array<Todo> = [
  {text: "Walk the dog", complete: true},
  {text: "Read a book", complete: false}
]

const App: React.FC = () => {

  const [todos, setTodo] = useState(initTodos)

  const toggleTodo: toggleTodo = selectedTodo => {
    const newTodo = todos.map(todo => {
      if(todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      } else {
        return todo;
      }
    })
    setTodo(newTodo)
  }

  const addTodo = (newTodo: string) => {
    newTodo !== "" && setTodo([...todos, {text: newTodo, complete: false}])
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
