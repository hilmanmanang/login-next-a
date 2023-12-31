"use client"
import { customButtonPrimary, customContainer, customLinkSelect, customTextField, customTitle, customTitle2 } from "@/utils/styles";
import { Button, Container, MenuItem, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from 'next-intl/link';
import { useEffect, useLayoutEffect, useState } from "react";
import { usePathname, useRouter } from 'next/navigation';

export default function Home() {
    const [count, setCount] = useState(0)
    const [allRecords, setAllRecords] = useState([])
    const [latestRecord, setLatestRecord] = useState<any>()
    const [lang, setLang] = useState('en')

    const t = useTranslations('Index')
    const pathname = usePathname();

    const getAllData = async () => {
        const response = await fetch('/api/readRecord', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        setAllRecords(JSON.parse(data || '[]'))
    }

    const getLatestData = async () => {
        const response = await fetch('/api/readLatestRecord', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        setLatestRecord(data)
    }

    const getCountData = async () => {
        const response = await fetch('/api/readCount', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        setCount(data)
    }

    useLayoutEffect(() => {
        if (pathname === '/final') setLang('en')
        else setLang('my')
    }, [pathname])

    useEffect(() => {
        getCountData()
        getLatestData()
    }, [])

    return (
        <Container sx={customContainer}>
            <Typography sx={customTitle}>{t('final_page')}</Typography>
            <Stack justifyContent="space-between"
                gap="8px"
                sx={{
                    width: '100%',
                    flexDirection: {
                        md: 'row',
                        xs: 'column-reverse'
                    }
                }}>
                <Link href="/">
                    <Button sx={customButtonPrimary}>{t('create_new')}</Button>
                </Link>
                <Stack direction="row" alignItems="center" gap="8px" justifyContent="flex-end">
                    <Typography sx={customTitle2}>{t('language')}</Typography>
                    <Select sx={{
                        ...customTextField,
                        width: 'unset'
                    }} value={lang}>
                        <MenuItem value={'en'}>
                            <Link href="/final" locale="en" style={customLinkSelect}>EN</Link>
                        </MenuItem>
                        <MenuItem value={'my'}>
                            <Link href="/final" locale="my" style={customLinkSelect}>MY</Link>
                        </MenuItem>
                    </Select>
                </Stack>
            </Stack>
            <Typography sx={customTitle2}>
                {t('current_record')}:
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 700 }}>{t('name')}</TableCell>
                            <TableCell>{latestRecord?.name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 700 }}>{t('email')}</TableCell>
                            <TableCell>{latestRecord?.email}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 700 }}>{t('age')}</TableCell>
                            <TableCell>{latestRecord?.age}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 700 }}>{t('phone')}</TableCell>
                            <TableCell>{latestRecord?.phone}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 700 }}>{t('language')}</TableCell>
                            <TableCell sx={{ textTransform: 'uppercase' }}>{latestRecord?.language}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Button sx={customButtonPrimary} onClick={getAllData}>{t('list_record')} ({count})</Button>
            {allRecords.length > 0 && <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 700 }}>{t('name')}</TableCell>
                            <TableCell sx={{ fontWeight: 700 }}>{t('email')}</TableCell>
                            <TableCell sx={{ fontWeight: 700 }}>{t('age')}</TableCell>
                            <TableCell sx={{ fontWeight: 700 }}>{t('phone')}</TableCell>
                            <TableCell sx={{ fontWeight: 700 }}>{t('language')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allRecords.map((record: any, key: number) => (
                            <TableRow key={key}>
                                <TableCell>{record.name}</TableCell>
                                <TableCell>{record.email}</TableCell>
                                <TableCell>{record.age}</TableCell>
                                <TableCell>{record.phone}</TableCell>
                                <TableCell sx={{ textTransform: 'uppercase' }}>{record.language}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>}
        </Container>
    )
}
