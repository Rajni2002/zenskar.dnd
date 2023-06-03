import React from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { setElement } from '../../store/slice/elementSlice';
import { v4 as uuidv4 } from 'uuid';
import RenderElements from './RenderElements';

const EditorCanvas = (props) => {

    const dispatch = useDispatch();
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        // The type (or types) to accept - strings or symbols
        accept: ["button", "textInput", "dropdown", "table"],
        // Props to collect
        collect: (monitor) => {
            const elementType = monitor.getItemType();
            if (monitor.getDropResult() && elementType) {
                const newElement = {
                    key: uuidv4(),
                }
                let metaData = {};
                switch (elementType) {
                    case "button":
                        metaData = {
                            val: "Submit"
                        }
                        break;

                    case "textInput":
                        metaData = {
                            val: "Type the email"
                        }
                        break;

                    case "dropdown":
                        metaData = {
                            listValues: [
                                "Macbook",
                                "Ipad",
                                "Table"
                            ]
                        }
                        break;

                    case "table":
                        metaData = {
                            row: 2,
                            col: 2,
                            tableHead: ["S.No", "Name"],
                            entries: [
                                [1, "Zenskar"],
                                [2, "Notion"]
                            ]
                        }
                        break;
                    default:
                        break;
                }

                dispatch(setElement({
                    ...newElement,
                    metaData: {
                        ...metaData,
                        type: elementType
                    }
                }))
            }
            return {
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop()
            }
        }
    }))
    return (
        <div
            className="editor-canvas"
            ref={drop}
            style={{ backgroundColor: isOver ? 'red' : 'white' }}
        >
            <RenderElements canDrop={canDrop}/>
        </div>
    );
};

export default EditorCanvas;
