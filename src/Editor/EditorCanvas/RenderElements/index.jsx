import React from 'react';
import { useSelector } from 'react-redux';
import Button from "../DraggableElements/Button"
import Dropdown from "../DraggableElements/Dropdown"
import Table from "../DraggableElements/Table"
import TextInput from "../DraggableElements/TextInput"

const SwitchElement = ({ element }) => {
    let component;
    switch (element.type) {
        case "button":
            component = <Button val={element.val} />
            break;

        case "textInput":
            component = <TextInput val={element.val} />
            break;

        case "dropdown":
            component = <Dropdown listValues={element.listValues} />
            break;

        case "table":
            component = <Table val={element}/>
            break;
        default:
            component = <div></div>
            break;
    }
    return component;
}

const RenderElements = ({ canDrop }) => {
    const { elements } = useSelector((state) => state.elements);
    return (
        Object.keys(elements).length ? Object.keys(elements).map((key, index) => (
            <SwitchElement key={index} element={elements[key]} />
        )) :
            <h4>
                {canDrop ? 'Release to drop' : 'Drag & drop components here.'}
            </h4>

    );
};

export default RenderElements;
