import React from 'react';
import { useDragLayer } from 'react-dnd'
import componentTypes from '../../../../data/componentTypes';
import { snapToGrid } from '../..';

const layerStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
}

function getItemStyles(initialOffset, currentOffset, isSnapToGrid) {
    if (!initialOffset || !currentOffset) {
        return {
            display: 'none',
        }
    }
    let { x, y } = currentOffset
    if (isSnapToGrid) {
        x -= initialOffset.x
        y -= initialOffset.y
            ;[x, y] = snapToGrid(x, y)
        x += initialOffset.x
        y += initialOffset.y
    }
    const transform = `translate(${x}px, ${y}px)`
    return {
        transform,
        WebkitTransform: transform,
    }
}

const DraggableLayer = () => {
    const { itemType, isDragging, item, initialOffset, currentOffset } =
        useDragLayer((monitor) => {
            return {
                item: monitor.getItem(),
                itemType: monitor.getItemType(),
                initialOffset: monitor.getInitialSourceClientOffset(),
                currentOffset: monitor.getSourceClientOffset(),
                isDragging: monitor.isDragging(),
            }
        })


    const renderItem = () => {
        if (componentTypes.find((value) => (value === itemType))) {
            return <h1>Dragging</h1>
        }
        return null;
    }
    if (!isDragging) {
        return null
    }
    return (
        <div style={layerStyles}>
            <div
                style={getItemStyles(initialOffset, currentOffset, true)}
            >
                {renderItem()}
            </div>
        </div>
    );
};

export default DraggableLayer;
