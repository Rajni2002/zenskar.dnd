import React, { useEffect } from 'react';
import { useDrag } from 'react-dnd';

const getStyles = (left, top, isDragging) => {
    const transform = `translate3d(${left}px, ${top}px, 0)`
    return {
        position: 'absolute',
        transform,
        WebkitTransform: transform,
        opacity: isDragging ? 0 : 1,
        height: isDragging ? 0 : '',
    }
}

const DraggableWrapper = ({ id, type, left, top, children }) => {
    if (!id) return <h1>loading</h1>
    const [{ isDragging }, drag, preview] = useDrag(
        () => ({
            type,
            item: { id, left, top },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [id, left, top]
    )
    useEffect(() => {
        preview(<h1>Dragging</h1>, { captureDraggingState: true })
    }, [preview])
    return (
        <div
            id={id}
            ref={drag}
            style={getStyles(left, top, isDragging)}
            className='draggable'
        >
            {children}
        </div>
    )
};

export default DraggableWrapper;
