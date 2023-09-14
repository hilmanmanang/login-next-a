"use client"
import { useGlobalContext } from "@/providers/context/globalContext";
import { customButtonPrimary, customButtonSecondary, customContainer, customFooter, customTextField, customTitle } from "@/utils/styles";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Home() {
    const { globalDatas, setGlobalDatas } = useGlobalContext()
    const t = useTranslations('Index')
    const router = useRouter()

    const handleInputChange = (event: any) => {
        const { name, value } = event.target
        setGlobalDatas({
            ...globalDatas,
            [name]: value
        })
    }

    return (
        <Container sx={customContainer}>
            <Typography sx={customTitle}>{t('details_page')}</Typography>
            <TextField
                name="age"
                type="text"
                onChange={handleInputChange}
                placeholder={t('age')}
                sx={customTextField} />
            <TextField
                name="phone"
                type="text"
                onChange={handleInputChange}
                placeholder={t('phone')}
                sx={customTextField} />
            <Stack sx={customFooter}>
                <Button sx={customButtonSecondary} onClick={() => router.back()}>{t('back')}</Button>
                <Link href="/localisation">
                    <Button sx={customButtonPrimary}>{t('next')}</Button>
                </Link>
            </Stack>
        </Container>
    )
}
