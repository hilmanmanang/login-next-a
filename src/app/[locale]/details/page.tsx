"use client"
import { useGlobalContext } from "@/providers/context/globalContext";
import { customButtonPrimary, customButtonSecondary, customContainer, customFooter, customLabel, customTextField, customTitle } from "@/utils/styles";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Home() {
    const { globalDatas, setGlobalDatas } = useGlobalContext()
    const { age, phone } = globalDatas
    const t = useTranslations('Index')
    const router = useRouter()

    const handleInputChange = (event: any) => {
        const { name, value } = event.target
        const integerRegex = /^[0-9]+(?:,[0-9]{0,9})*$/

        if (name === 'age') {
            setGlobalDatas({
                ...globalDatas,
                [name]: integerRegex.test(value) && value.length < 3 ? value : value.slice(0, -1)
            })
        } else {
            setGlobalDatas({
                ...globalDatas,
                [name]: integerRegex.test(value) && value.length < 13 ? value : value.slice(0, -1)
            })
        }
    }

    return (
        <Container sx={customContainer}>
            <Typography sx={customTitle}>{t('details_page')}</Typography>
            <Container>
                <Typography sx={customLabel}>{t('age')}*</Typography>
                <TextField
                    name="age"
                    type="text"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={handleInputChange}
                    value={globalDatas.age}
                    placeholder={t('enter') + t('age')}
                    sx={customTextField} />
            </Container>
            <Container>
                <Typography sx={customLabel}>{t('phone')}*</Typography>
                <TextField
                    name="phone"
                    type="text"
                    onChange={handleInputChange}
                    value={globalDatas.phone}
                    placeholder={t('enter') + t('phone')}
                    sx={customTextField} />
            </Container>
            <Stack sx={customFooter}>
                <Button sx={customButtonSecondary} onClick={() => router.back()}>{t('back')}</Button>
                <Link href={age && phone ? '/localisation' : '/details'} style={{ color: 'unset', textDecoration: 'unset' }}>
                    <Button disabled={!age || !phone} sx={customButtonPrimary}>{t('next')}</Button>
                </Link>
            </Stack>
        </Container>
    )
}
