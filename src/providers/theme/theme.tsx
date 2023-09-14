"use client";
import { Container, ThemeProvider } from '@mui/material';
import { lightTheme } from './lightMode';

export const GlobalThemeProvider = ({ children }: any) => {

    return (
        <ThemeProvider theme={lightTheme}>
            <Container sx={{ bgcolor: '#1431C7' }}>
                {children}
            </Container>
        </ThemeProvider>
    )
}