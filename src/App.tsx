// App.tsx
import './App.css'
/*import CounterScore from './component/CounterScore'
import CounterInc from './component/CounterInc'
import CounterDec from './component/CounterDec'*/
import TodoForm from "./component/todoComponent/todoFrom";
import ShowTodoList from "./component/todoComponent/showTodoList";
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <CounterScore/> */}
        {/*<CounterInc/>*/}
        {/*<CounterDec/>*/}
        <div style={{ padding: "20px" }}>
          <h1>Todo List</h1>
          <TodoForm />
          <ShowTodoList />
        </div>
      </div>
    </>
  );
}

export default App
