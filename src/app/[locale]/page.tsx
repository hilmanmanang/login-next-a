"use client"
import { useGlobalContext } from "@/providers/context/globalContext";
import { customButtonPrimary, customContainer, customTextField, customTitle } from "@/utils/styles";
import { Button, Container, TextField, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
    const { globalDatas, setGlobalDatas } = useGlobalContext()
    const t = useTranslations('Index')

    const handleInputChange = (event: any) => {
        const { name, value } = event.target
        setGlobalDatas({
            ...globalDatas,
            [name]: value
        })
    }

    return (
        <Container sx={customContainer}>
            <Typography sx={customTitle}>{t('landing_page')}</Typography>
            <TextField
                name="name"
                type="text"
                onChange={handleInputChange}
                placeholder={t('name')}
                sx={customTextField} />
            <TextField
                name="email"
                type="email"
                onChange={handleInputChange}
                placeholder={t('email')}
                sx={customTextField} />
            <Link href="/details">
                <Button sx={customButtonPrimary}>{t('next')}</Button>
            </Link>
        </Container>
    )
}
