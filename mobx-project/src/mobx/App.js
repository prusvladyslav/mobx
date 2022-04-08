import counter from './counter'
import { observer } from 'mobx-react-lite'
import todo from './todo'
import {useState} from 'react'
const App = observer(() => {
  let [title, setTitle] = useState()
   console.log(todo.todos);
  return (
    <div className="App">
      <h2>Count: {counter.count}</h2>
      <button onClick={() => counter.increment()}>increment</button>
      <button onClick={() => counter.decrement()}>decrement</button>
      <input onChange={(e) => setTitle(e.target.value)}></input>
      <button
        onClick={() =>
          todo.addTodo({
            id: todo.todos[todo.todos.length-1].id + 1,
            title: title,
          })
        }
      >
        add todo
      </button>
      <div>
        {todo.todos.map((t) => (
          <>
            <h1>{t.id}</h1>
            <div key={t.id}>
              {t.title} <button onClick={() => todo.deleteTodo(t.id)}>x</button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
})

export default App;
