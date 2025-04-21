import { useTodos } from "../contexts/TodoContext";

export const useTodoActions = () => {
  const { todos, addTodo, toggleTodo, deleteTodo, editTodo } = useTodos();

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    completedCount: todos.filter((todo) => todo.completed).length,
    totalCount: todos.length,
    remainingCount: todos.filter((todo) => !todo.completed).length,
  };
};
