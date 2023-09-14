import { GlobalContextProvider } from '@/providers/context/globalContext'
import { GlobalThemeProvider } from '@/providers/theme/theme'
import { Metadata } from 'next'
import { Inter } from "next/font/google"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'PCB Calculator',
    description: 'Define Your Detailed PCB Contribution and Tax Reliefs',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1'
}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <GlobalContextProvider>
                    <GlobalThemeProvider>
                        <div className='layout-screen'>
                            {children}
                        </div>
                    </GlobalThemeProvider>
                </GlobalContextProvider>
            </body>
        </html>
    )
}
