import React from "react";
import { TodoProvider } from "../contexts/TodoContext";
import { TodoSection } from "./sections/TodoSection";

export const TodoApp: React.FC = () => {
  return (
    <TodoProvider>
      <TodoSection />
    </TodoProvider>
  );
};
