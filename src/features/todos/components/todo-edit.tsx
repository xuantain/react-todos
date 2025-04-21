interface Props {
  id: number;
}

export function TodoEdit(props: Props) {
  return <h1>Todo Edit: {props.id}</h1>;
}
