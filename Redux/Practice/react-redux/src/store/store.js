//import { configureStore, createSlice } from "@reduxjs/toolkit";
//
//const toDos = createSlice({
//  name: "toDosReducer",
//  initialState: [],
//  reducers: {
//    add: (state, action) => {
//      state.push({ text: action.payload, id: Date.now() });
//    },
//    remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
//  }
//});
//
//export const { add, remove } = toDos.actions;
//
//export default configureStore({ reducer: toDos.reducer });

import { configureStore } from '@reduxjs/toolkit';

const addType = "ADD"
const removeType ="Remove"

const reducer = (state=[], action) =>{
  switch(action.type){
    case addType:
      return [{text:action.text,id:Date.now()},...state]
    case removeType:
      return state.filter(itme => itme.id !== action.id)
    default:
      return state
  }
}



const store = configureStore({reducer})

export const add = (text)=>{return {type:addType,text}}
export const remove = (id) =>{return {type:removeType, id:id}}
export default store