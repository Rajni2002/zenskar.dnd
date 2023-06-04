import { OutlinedInput } from '@mui/material';
import React from 'react';

const TextInput = ({ val, id }) => {
    return (
        <OutlinedInput sx={{
            fontFamily: "inherit"
        }} placeholder={val} />
    );
};

export default TextInput;
