interface Props {
  id: number;
}

export function TodoItem(props: Props) {
  return <h1>Todo Item: {props.id}</h1>;
}
