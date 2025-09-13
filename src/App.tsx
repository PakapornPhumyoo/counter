import TodoForm from "./component/todoComponent/todoFrom";
import ShowTodoList from "./component/todoComponent/showTodoList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo List</h1>
      <TodoForm />
      <ShowTodoList />
    </div>
  );
}

export default App;
