import { TodoApp } from "@src/features/todos";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <div className="container mx-auto py-8">
        <TodoApp />
      </div>
    </div>
  );
}
