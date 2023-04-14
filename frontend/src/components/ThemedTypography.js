import {Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import React from 'react';
function ThemedTypography(props) {
    let theme = useTheme()

    let newProps = {
        ...props,
        sx: {
            ...props.sx,
            fontWeight: (props.bolded ? 700 : 400),
            color: theme.palette.h1.primary
        }
    }

    return React.createElement(
        Typography,
        newProps
    )
}

export default ThemedTypography