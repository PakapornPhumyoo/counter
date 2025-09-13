import { useTodoStore } from "../../store/todoStore";
import RemoveButton from "./removeButton";

export default function ShowTodoList() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ marginBottom: "8px" }}>
          {todo.text}
          <RemoveButton id={todo.id} />
        </li>
      ))}
    </ul>
  );
}
