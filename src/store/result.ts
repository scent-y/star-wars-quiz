import { createSlice } from "@reduxjs/toolkit";

export const resultSlice = createSlice({
    name: 'result',
    initialState:  {
        value: 0
    },
    reducers: {
        correct: state => {
            state.value += 1
        },
        reset: state => {
            state.value = 0
        }
    }
})
export const selectResult = (state: { result: { value: number } }) => state.result.value;
export const resultActions = resultSlice.actions;
export const resultReducer = resultSlice.reducer;

