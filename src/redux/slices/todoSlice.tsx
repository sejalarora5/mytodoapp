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
      },
      toggleComplete: (state, action) => {
        const index = state.findIndex((todo)=> 
          todo.id === action.payload.id
        );
        state[index].completed = action.payload.completed;
        // const index = state.findIndex((todo) => todo.id === action.payload.id);
        // if (index !== -1) {
        //     state[index].completed = !state[index].completed;
        // }
      },
    //   toggleComplete: (state, action) => {
    //     return state.map(todo => 
    //         todo.id === action.payload.id 
    //         ? { ...todo, completed: !todo.completed } 
    //         : todo
    //     );
    // },
      deleteTodo: (state, action) => {
        return state.filter((todo) => todo.id !== action.payload.id);
      },
      updateTodo: (state, action) => {
        const { id, title, description } = action.payload;
        const todoToUpdate = state.find(todo => todo.id === id);
        if (todoToUpdate) {
            todoToUpdate.title = title;
            todoToUpdate.description = description;
        }
    },
    },
})


export const { addTodo, toggleComplete, deleteTodo, updateTodo} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
