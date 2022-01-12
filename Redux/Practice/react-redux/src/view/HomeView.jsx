import {useState} from 'react'
import {connect} from 'react-redux'
import { useParams } from 'react-router-dom';
import { TodoList } from '../components/TodoList';
import {add} from '../store/store'
function Home({ toDos, addToDo }) {
    const [text, setText] = useState("");

    const { productId } = useParams();
		console.log(productId);

    function onChange(e) {
      setText(e.target.value);
    }

    function onSubmit(e) {
      e.preventDefault();
      addToDo(text);
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
          productId={productId} />
        ))}
        </ul>
      </>
    );
  }
  
  function mapStateToProps(state) {
    return { toDos: state };
  }
  
  //function mapDispatchToProps(dispatch) {
  //  return {
  //    addToDo: text => dispatch(add(text))
  //  };
  //}

    function mapDispatchToProps(dispatch){
      return{
        addToDo: text =>(dispatch(add(text)))
      }
    }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);