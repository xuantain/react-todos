import React from "react";
import { useTodoActions } from "../../hooks/useTodoActions";

export const TodoStats: React.FC = () => {
  const { totalCount, completedCount, remainingCount } = useTodoActions();

  if (totalCount === 0) return null;

  return (
    <div className="text-muted-foreground flex justify-between border-t p-2 text-sm">
      <span>Total: {totalCount}</span>
      <span>Completed: {completedCount}</span>
      <span>Remaining: {remainingCount}</span>
    </div>
  );
};
