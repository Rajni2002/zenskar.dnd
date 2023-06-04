import React from 'react';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { setElement } from '../../store/slice/elementSlice';
import { createNewElement } from '../EditorCanvas';

const elementTypes = [
    {
        type: "button",
        display: "Button"
    },
    {
        type: "textInput",
        display: "Text Input"
    },
    {
        type: "dropdown",
        display: "Dropdown"
    },
    {
        type: "table",
        display: "Table"
    },
]

const ElementPickerItem = ({ type, display }) => {
    const dispatch = useDispatch();
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type,
        item: { type },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))

    const clickHandler = () => {
        const newElement = createNewElement(type);
        dispatch(setElement(newElement));
    }

    return (
        <div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <div role="Handle" ref={drag} >
                <button onClick={clickHandler}> Create a {display}</button>
            </div>
        </div>)
}


const EditorPicker = (props) => {
    return (
        <div className="editor-picker">
            <h4>
                Components
            </h4>
            {elementTypes.map((item, index) => (
                <ElementPickerItem key={index} {...item} />
            ))}
        </div>
    );
};

export default EditorPicker;
