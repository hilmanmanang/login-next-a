import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1280
        }
    },
    palette: {
        mode: 'light',
    },
    components: {
        MuiContainer: {
            defaultProps: {
                disableGutters: true,
                maxWidth: false
            }
        },
    },
    typography: {
        fontFamily: 'unset'
    }
})