import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
      id: 1,
      value: 0,
    },
    {
      id: 2,
      value: 0,
    }
  ];
const countersSlice = createSlice({
    name: "counters", // convention: folder name
    initialState, //initialState: initialState   Shortcut: initialState
    reducers: {
        increment : (state, action) => {
            const counterIndex = state.findIndex(c => c.id === action.payload) //action.payload <--- counter id
            state[counterIndex].value++;
        },
        decrement : (state, action) => {
            const counterIndex = state.findIndex(c => c.id === action.payload) //action.payload <--- counter id
            state[counterIndex].value--;
        }
    }

    
});

export default countersSlice.reducer;

export const {increment, decrement} = countersSlice.actions;

//createSlice({name, initial state, reducers(multiple reducer)});