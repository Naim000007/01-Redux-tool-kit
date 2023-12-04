import {createSlice, nanoid } from '@reduxjs/toolkit'

const initialState ={
    todos: [{id:1, text:'hello world'}]
}
// function sayHello(){
//     console.log('hello wrold');
// }
export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducer:{
        addTodo: (state, action)=> {
            const todo ={
                id:nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        redmoveTodo: (state , action)=>{
            state.todos = state.todos.filter((todo)=> todo. id!==action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.action
export default todoSlice.reducer