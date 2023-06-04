import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { setElement } from '../../store/slice/elementSlice';
import { createNewElement } from '../EditorCanvas';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import buttonImg from "../../assets/button.png"
import dropdownImg from "../../assets/dropdown.png"
import tableImg from "../../assets/table.png"
import textImg from "../../assets/text.png";
import Search from "../../assets/svgs/search.svg";

const elementTypes = [
    {
        type: "textInput",
        display: "Text Input",
        secondary: "Trigger actions like run queries, export data etc.",
        src: textImg
    },
    {
        type: "button",
        display: "Button",
        secondary: "Supports Markdown or HTML.",
        src: buttonImg
    },
    {
        type: "dropdown",
        display: "Dropdown",
        secondary: "Select from a set of options, with a dropdown.",
        src: dropdownImg
    },
    {
        type: "table",
        display: "Table",
        secondary: "Select from a set of options, with a dropdown.",
        src: tableImg
    },
]

const ElementPickerItem = ({ type, display, secondary, src }) => {
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
        <>
            <ListItem
                ref={drag}
                className='draggable'
                sx={{
                    opacity: isDragging ? 0.5 : 1,
                    background: "#F9FBFC 0% 0% no-repeat padding-box",
                    '.css-83ijpv-MuiTypography-root': {
                        padding: 0,
                        font: "normal normal normal 14px/32px Figtree",
                        color: "#707880",
                        letterSpacing: 0,
                        lineHeight: "1.5rem"
                    },
                    '.css-10hburv-MuiTypography-root': {
                        font: "normal normal 600 15px/32px Figtree",
                        fontWeight: 600,
                        color: "#1A1A1A",
                        lineHeight: "1.5rem"
                    },
                    padding: "1rem .5rem 2rem .5rem"
                }}
                alignItems="flex-start"
                onClick={clickHandler}>
                <ListItemAvatar>
                    <Avatar
                        alt="Remy Sharp"
                        variant='square'
                        src={src} sx={{
                            background: "#FFFFFF 0% 0% no-repeat padding-box",
                            boxShadow: "3px 4px 20px #A0B8C789",
                            borderRadius: "4px",
                            padding: "2px"
                        }} />
                </ListItemAvatar>
                <ListItemText
                    primary={display}
                    secondary={secondary}
                />
            </ListItem>
            <Divider variant="fullWidth" light={true} component="li" />
        </>
    )
}

const EditorPicker = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div className="editor-picker">
            <div>
                <img src={Search} alt='search' style={{
                    position: 'relative',
                    top: "2.3rem",
                    left: "-9.5rem"
                }} />
                <input
                    style={{
                        width: "90%",
                        padding: ".5rem 0rem .5rem 3rem",
                        marginBottom: "1rem",
                        background: "#FFFFFF 0% 0% no-repeat padding-box",
                        border: "1px solid #CDD6DE",
                        borderRadius: "4px",
                        font: "normal normal normal 16px/32px Figtree",
                        letterSpacing: "0px",
                        color: "#707880"
                    }}
                    onChange={(e) => {
                        const { value } = e.target;
                        setSearchTerm(value);
                    }} placeholder='Search Components' />
            </div>
            <p style={{
                textAlign: "left",
                font: "normal normal 600 16px/32px Figtree",
                letterSpacing: "0px",
                color: "#707880",
                marginBottom: 0,
                opacity: 1,
                padding: "0 0 0 .5rem"
            }}>
                Components
            </p>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', padding: 0 }}>
                {
                    (searchTerm.length
                        ? elementTypes
                            .filter(ele => ele.display
                                .replace(/\s/g, '').toLocaleLowerCase()
                                .includes(searchTerm.toLocaleLowerCase()))
                        : elementTypes).map((item, index) => (
                            <ElementPickerItem key={index} {...item} />
                        ))
                }
            </List>
        </div>
    );
};

export default EditorPicker;
