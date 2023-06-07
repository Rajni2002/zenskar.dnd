import React from 'react';
import { useSelector } from 'react-redux';
import Button from "../DraggableElements/Button"
import Dropdown from "../DraggableElements/Dropdown"
import Table from "../DraggableElements/Table"
import TextInput from "../DraggableElements/TextInput"
import DraggableWrapper from '../DraggableElements/DraggableWrapper';

const SwitchElement = ({ element }) => {
    let component;
    switch (element.type) {
        case "button":
            component = <Button {...element} />
            break;

        case "textInput":
            component = <TextInput {...element} />
            break;

        case "dropdown":
            component = <Dropdown {...element} />
            break;

        case "table":
            component = <Table {...element} />
            break;
        default:
            component = <div></div>
            break;
    }
    return (
        <DraggableWrapper {...element}>
            {component}
        </DraggableWrapper>
    )
}

const RenderElements = ({ canDrop }) => {
    const { elements } = useSelector((state) => state.elements);
    return (
        Object.keys(elements ? elements : {}).length ? Object.keys(elements).map((key, index) => (
            <SwitchElement key={index} element={elements[key]} />
        )) :
            <h1 style={{
                marginTop: "22rem",
                opacity: '0.1'
            }}>
                {canDrop ? 'Release to drop' : 'Drag & drop components here.'}
            </h1>

    );
};

export default RenderElements;
