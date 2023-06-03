import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    elements: {}
}

// each item in elements -> { type, stateData, position }
const elementSlice = createSlice({
    name: "elements",
    initialState,
    reducers: {
        setElement: (state, action) => ({
            ...state,
            elements: {
                ...state.elements,
                [action.payload.key]: action.payload.metaData
            }
        }),
    },
});

export const {
    setElement
} = elementSlice.actions;

export default elementSlice.reducer;