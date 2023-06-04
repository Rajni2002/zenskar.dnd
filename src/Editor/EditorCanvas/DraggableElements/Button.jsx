import React from 'react';
import { Button as MUIButton } from '@mui/material';

const Button = ({ val, id }) => {
    return (
        <MUIButton
            className='draggable'
            sx={{
                backgroundColor: "#6a2fed",
                textTransform: "capitalize",
                fontFamily: 'inherit'
            }} variant="contained" >{val}</MUIButton>
    );
};

export default Button;
