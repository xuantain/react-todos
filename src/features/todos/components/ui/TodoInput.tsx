import React, { useState } from "react";
import { Button } from "@src/shared/components/ui/button";
import { useTodoActions } from "../../hooks/useTodoActions";

export const TodoInput: React.FC = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodoActions();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="focus:ring-primary flex-1 rounded-md border px-3 py-2 focus:ring-2 focus:outline-none"
      />
      <Button type="submit" disabled={!text.trim()}>
        Add Todo
      </Button>
    </form>
  );
};
