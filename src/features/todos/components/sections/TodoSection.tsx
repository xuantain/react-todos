import React from "react";
import { TodoInput } from "../ui/TodoInput";
import { TodoList } from "../ui/TodoList";
import { TodoStats } from "../ui/TodoStats";

export const TodoSection: React.FC = () => {
  return (
    <div className="mx-auto max-w-md space-y-4 p-4">
      <h1 className="text-center text-2xl font-bold">Todo App</h1>
      <TodoInput />
      <TodoList />
      <TodoStats />
    </div>
  );
};
