import React, { memo, useEffect, useState } from 'react';
import { useDrag } from 'react-dnd';

const getStyles = (left, top, isDragging) => {
    const transform = `translate3d(${left}px, ${top}px, 0)`
    return {
        position: 'absolute',
        transform,
        WebkitTransform: transform,
        // IE fallback: hide the real node using CSS when dragging
        // because IE will ignore our custom "empty image" drag preview.
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
            ref={drag}
            style={getStyles(left, top, isDragging)}
        >
            {children}
        </div>
    )
};

export default DraggableWrapper;
