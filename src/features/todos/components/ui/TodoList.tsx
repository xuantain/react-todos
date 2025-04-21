import React from "react";
import { TodoItem } from "./TodoItem";
import { useTodoActions } from "../../hooks/useTodoActions";

export const TodoList: React.FC = () => {
  const { todos, toggleTodo, deleteTodo, editTodo } = useTodoActions();

  if (todos.length === 0) {
    return (
      <div className="text-muted-foreground p-4 text-center">
        No todos yet. Add one above!
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      ))}
    </div>
  );
};
