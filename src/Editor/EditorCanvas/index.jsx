import React, { useCallback } from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { setElement, setElementPosition } from '../../store/slice/elementSlice';
import { v4 as uuidv4 } from 'uuid';
import RenderElements from './RenderElements';
import componentTypes, { defaultData } from '../../data/componentTypes';

export const snapToGrid = (x, y) => {
    const snappedX = Math.round(x / 32) * 32;
    const snappedY = Math.round(y / 32) * 32;
    return [snappedX, snappedY]
}

export const createNewElement = (elementType) => {
    const id = uuidv4();

    return {
        key: id,
        metaData: {
            ...defaultData[elementType],
            type: elementType,
            top: 20,
            left: 80,
            id
        }
    }
}

const EditorCanvas = () => {
    const { elements } = useSelector((state) => state.elements)

    const dispatch = useDispatch();
    const moveBox = useCallback(
        (id, left, top) => {
            dispatch(setElementPosition({
                id,
                left,
                top
            }))
        },
        [elements],
    )


    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        // The type (or types) to accept - strings or symbols
        accept: componentTypes,
        // Props to collect
        collect: (monitor) => {
            const elementType = monitor.getItemType();
            // This will skip from creating of the same element in the canvas
            if (monitor.getDropResult() && elementType && !(monitor.getItem() && monitor.getItem().id)) {
                dispatch(setElement(createNewElement(elementType)));
            }
            return {
                isOver: monitor.isOver(),
                // canDrop: monitor.canDrop()
            }
        },
        // Catch drags within the canvas
        drop: (item, monitor) => {
            if (item.id) {
                const delta = monitor.getDifferenceFromInitialOffset();
                let left = Math.round(item.left + delta.x)
                let top = Math.round(item.top + delta.y)
                    ;[left, top] = snapToGrid(left, top)
                moveBox(item.id, left, top)
            }
            return undefined
        }
    }))
    return (
        <>
            <div
                className="editor-canvas"
                ref={drop}
            >
                <RenderElements canDrop={canDrop} />
            </div>
        </>

    );
};

export default EditorCanvas;
