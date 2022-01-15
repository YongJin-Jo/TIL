import {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { TodoList } from '../components/TodoList';
import {add} from '../store/store'
export default function Home() {
    const [text, setText] = useState("");
    const toDos = useSelector(state => state)
    const dispatch = useDispatch()

    function onChange(e) {
      setText(e.target.value);
    }

    function onSubmit(e) {
      e.preventDefault();
      dispatch(add(text))
      setText("");
    }

    return (
      <>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
          <input type="text" value={text} onChange={onChange} />
          <button>Add</button>
        </form>
        <ul>
          {toDos.map(toDo =>  (
          <TodoList 
          {...toDo}
          key={toDo.id} 
          />
        ))}
        </ul>
      </>
    );
  }
