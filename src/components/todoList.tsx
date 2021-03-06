import * as React from 'react';
import { TodoListItem } from './todoListItem';

interface TodoListProps {
  todos: Array<Todo>
  toggleTodo: toggleTodo
}

export const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo}) => {
  return (
    <ul>
      {todos.map(todo => {
        return <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      })}
    </ul>
  )
}