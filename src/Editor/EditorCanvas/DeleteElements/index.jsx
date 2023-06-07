import React, { useEffect } from 'react';
import trash from "../../../assets/svgs/trash.svg";
import redTrash from "../../../assets/svgs/red-trash.svg";
import { useDrop } from 'react-dnd';
import componentTypes from '../../../data/componentTypes';
import { useDispatch } from 'react-redux';
import { removeElement } from '../../../store/slice/elementSlice';

const DeleteElements = () => {
    const dispatch = useDispatch();
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        // The type (or types) to accept - strings or symbols
        accept: componentTypes,
        // Catch drags within the canvas
        collect: (monitor) => {
            return {
                canDrop: monitor.canDrop(),
                isOver: monitor.isOver()
            }
        },
        drop: (item, monitor) => {
            if (item.id)
                dispatch(removeElement(item.id));
            return undefined
        }
    }))
    return (
        <div ref={drop} style={{
            position: 'absolute',
            left: "36%",
            width: "10rem",
            height: "8rem"
        }}>
            <img src={isOver ? redTrash : trash} alt='Trash to delete Elements' />
        </div>
    );
};

export default DeleteElements;
