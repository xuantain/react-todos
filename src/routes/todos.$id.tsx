import { TodoItem } from "@src/features/todos/components/todo-item";
import { useParams } from "react-router";

export default function Page() {
  const params = useParams();

  return <TodoItem id={Number(params.id)} />;
}
