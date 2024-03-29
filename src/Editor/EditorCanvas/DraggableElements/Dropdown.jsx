import React, { useState } from 'react';
import { ClickAwayListener, FormControl, InputLabel, MenuItem, Select } from '@mui/material';


const Dropdown = ({ listValues }) => {
    const [option, setOption] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <ClickAwayListener onClickAway={(e) => {
            e.stopPropagation();
            setIsOpen(false)
            setIsDisabled(true)
        }}>
            <FormControl fullWidth>
                <InputLabel id="demo-controlled-open-select-label" sx={{
                    fontFamily: "inherit"
                }}>Select Options</InputLabel>
                <Select
                    disabled={isDisabled}
                    value={option}
                    label="Select Options"
                    onChange={(e) => {
                        const { value } = e.target;
                        setOption(value)
                    }}
                    sx={{
                        fontFamily: "inherit",
                        width: "10rem",
                        background: "white",
                    }}
                    autoWidth
                    onDoubleClick={(e) => {
                        e.stopPropagation();
                        setIsDisabled(false)
                    }}
                    open={isOpen}
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(prev => !prev)
                    }}
                >
                    {listValues.map((item, index) => (<MenuItem key={index} value={item}>{item}</MenuItem>))}
                </Select>
            </FormControl >
        </ClickAwayListener>

    );
};

export default Dropdown;
