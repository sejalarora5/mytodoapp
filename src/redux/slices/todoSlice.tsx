import { createSlice } from '@reduxjs/toolkit'


export const todoSlice = createSlice({
    name: 'todos',
    initialState : [
      {id: 1, title: 'Todo1', description: 'Description1', completed: false}
    ],
    reducers: {
      addTodo: (state, action) => {
        const newToDo =  {
          id: Date.now(),
          title: action.payload.title,
          description: action.payload.description,
          completed: false,
        };
        state.push(newToDo);
      }
    },
})



export const { addTodo} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
