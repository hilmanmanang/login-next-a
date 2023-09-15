"use client"
import { useGlobalContext } from "@/providers/context/globalContext";
import { customButtonPrimary, customContainer, customFooter, customLabel, customTextField, customTitle } from "@/utils/styles";
import { Button, Container, InputLabel, Stack, TextField, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
    const { globalDatas, setGlobalDatas } = useGlobalContext()
    const { name, email } = globalDatas

    const t = useTranslations('Index')

    const handleInputChange = (event: any) => {
        const { name, value } = event.target
        setGlobalDatas({
            ...globalDatas,
            [name]: value.length < 50 ? value : value.slice(0, -1)
        })
    }

    return (
        <Container sx={customContainer}>
            <Typography sx={customTitle}>{t('landing_page')}</Typography>
            <Container>
                <Typography sx={customLabel}>{t('name')}*</Typography>
                <TextField
                    name="name"
                    type="text"
                    onChange={handleInputChange}
                    value={name}
                    placeholder={t('enter') + t('name')}
                    sx={customTextField} />
            </Container>
            <Container>
            <Typography sx={customLabel}>{t('email')}*</Typography>
            <TextField
                name="email"
                type="email"
                onChange={handleInputChange}
                value={email}
                placeholder={t('enter') + t('email')}
                sx={customTextField} />
            </Container>
            <Stack sx={customFooter}>
                <Link href={name && email ? '/details' : '/'} style={{ color: 'unset', textDecoration: 'unset' }}>
                    <Button disabled={!name || !email} sx={customButtonPrimary}>{t('next')}</Button>
                </Link>
            </Stack>
        </Container>
    )
}
