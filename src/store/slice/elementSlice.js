import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../localStorage";


const initialState = {
    elements: loadState() ? loadState().elements.elements : {}
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
        setElementPosition: (state, action) => ({
            ...state,
            elements: {
                ...state.elements,
                [action.payload.id]: {
                    ...state.elements[action.payload.id],
                    top: action.payload.top,
                    left: action.payload.left
                }
            }
        })
    },
});

export const {
    setElement,
    setElementPosition
} = elementSlice.actions;

export default elementSlice.reducer;