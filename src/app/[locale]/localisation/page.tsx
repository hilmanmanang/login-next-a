"use client"
import { useGlobalContext } from "@/providers/context/globalContext";
import { customButtonPrimary, customButtonSecondary, customContainer, customFooter, customLabel, customTextField, customTitle } from "@/utils/styles";
import { Button, Container, MenuItem, Select, Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Home() {
    const { globalDatas, setGlobalDatas } = useGlobalContext()
    const t = useTranslations('Index')
    const router = useRouter()

    const handleSelectChange = (event: any) => {
        const { name, value } = event.target
        setGlobalDatas({
            ...globalDatas,
            [name]: value
        })
    }

    const writeData = async () => {
        const response = await fetch('/api/writeData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(globalDatas)
        });
        const data = await response.json();
    }

    return (
        <Container sx={customContainer}>
            <Typography sx={customTitle}>{t('localisation_page')}</Typography>
            <Container>
                <Typography sx={customLabel}>{t('language')}*</Typography>
                <Select value={globalDatas.language}
                    name="language"
                    onChange={handleSelectChange}
                    sx={customTextField}>
                    <MenuItem value={'en'}>EN</MenuItem>
                    <MenuItem value={'my'}>MY</MenuItem>
                </Select>
            </Container>
            <Stack sx={customFooter}>
                <Button sx={customButtonSecondary} onClick={() => router.back()}>{t('back')}</Button>
                <Link href="/final">
                    <Button sx={customButtonPrimary} onClick={writeData}>{t('submit')}</Button>
                </Link>
            </Stack>
        </Container>
    )
}
