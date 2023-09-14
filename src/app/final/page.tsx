"use client"
import { useGlobalContext } from "@/providers/context/globalContext";
import { Button, Container, TextField, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {

    const { globalDatas, setGlobalDatas } = useGlobalContext()

    const handleInputChange = (event: any) => {
        const { name, value } = event.target
        setGlobalDatas({
            ...globalDatas,
            [name]: value
        })
    }

    return (
        <Container sx={{
            height: '100vh',
            maxWidth: '500px',
            px: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '20px'
        }}>
            <Typography sx={{
                color: 'white',
                fontSize: '24px',
                fontWeight: 700
            }}>Final Page</Typography>
            <TextField
                name="age"
                type="text"
                onChange={handleInputChange}
                placeholder="Age"
                sx={{
                    width: '100%',
                    'input': {
                        color: 'white',
                        width: '100%'
                    }
                }} />
            <TextField
                name="phone"
                type="text"
                onChange={handleInputChange}
                placeholder="Phone Number"
                sx={{
                    width: '100%',
                    'input': {
                        color: 'white',
                    }
                }} />
            <Link href="/localisation">
                <Button sx={{
                    bgcolor: 'orange',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '18px',
                    px: '20px',
                    py: '10px'
                }}>Next</Button>
            </Link>
        </Container>
    )
}
