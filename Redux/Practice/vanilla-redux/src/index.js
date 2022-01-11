import { createStore } from 'redux'
const submit = document.querySelector("button")
const input = document.querySelector("input");
const ul = document.querySelector("ul")

const add_Type = "ADD";
const delete_Type = "DELETE"


//상태 관리
const reducer = (state =[], action) =>{
  switch (action.type) {
    case add_Type:
      const newToDoObj = { text: action.text, id: Date.now() };
      return [newToDoObj, ...state];
    case delete_Type:
      const clear =state.filter(itme => itme.id !== action.id)
      return clear
    default:
      return state
  }
}

// 상태 값
const addToTodo= (text) =>{
  return {
    type:add_Type,
    text
  }
}

// 상태값 저장하기
const dispatchAdd = (todo) =>{
  return store.dispatch(addToTodo(todo))
}

// 상태값
const delectTOTodo = (id) => {
  return {
    type:delete_Type,
    id
  }
} 

// 상태값 저장하기
const dispatchDelete = (e) =>{
  const id = parseInt(e.target.parentNode.id);
  return store.dispatch(delectTOTodo(id))
}





//폼데이터 이벤트 기능
const onSubmit = (e) =>{
  e.preventDefault();
  const todo = input.value
  dispatchAdd(todo)
  
}

//상태값 저장후 실행 함수 
const paintDodo= () => {
  const toDos = store.getState();
  input.value = "";
  ul.innerHTML=" ";
  toDos.forEach( toDo=> {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    
    li.id = toDo.id;
    li.innerHTML = toDo.text;
    btn.innerText = "BTN";
    li.appendChild(btn);
    ul.appendChild(li);
    btn.addEventListener("click", dispatchDelete);

  });
}


submit.addEventListener("click",onSubmit)
//저장소 생성
const store = createStore(reducer)
//상태 저장시 실행
store.subscribe(paintDodo);

