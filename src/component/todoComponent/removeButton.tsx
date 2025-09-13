import { useTodoStore } from "../../store/todoStore";

interface Props {
  id: number;
}

export default function RemoveButton({ id }: Props) {
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return (
    <button onClick={() => removeTodo(id)} style={{ marginLeft: "8px" }}>
      ลบ
    </button>
  );
}
