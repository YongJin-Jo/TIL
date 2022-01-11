import { createStore } from 'redux'

const add_Type = "ADD"
//const delete_Type = "DELETE"

const reducer = (state=[],action) =>{
    switch(action.type){
        case add_Type:
            return console.log(action);
        default:
            return state
    }
}

const addTo = (text) => {
    return {
        type:add_Type,
        text
    }
}

const addDispath= (text) =>{
    return stroe.dispatch(addTo(text))
}


export const stroe = createStore(reducer)

