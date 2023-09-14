import { GlobalContextProvider } from '@/providers/context/globalContext'
import { GlobalThemeProvider } from '@/providers/theme/theme'
import { Metadata } from 'next'
import { Inter } from "next/font/google"
import './../globals.css'
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl'

const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
    return [
        { locale: 'en' },
        { locale: 'my' }
    ];
}

export const metadata: Metadata = {
    title: 'Login Next A',
    description: 'Login Next A',
}

export default async function LocaleLayout({ children, params: { locale } }: any) {
    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }
    return (
        <html lang={locale}>
            <body className={inter.className}>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <GlobalContextProvider>
                    <GlobalThemeProvider>
                        <div className='layout-screen'>
                            {children}
                        </div>
                    </GlobalThemeProvider>
                </GlobalContextProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
