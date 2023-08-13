import '@/shared/styles/globals.scss';
import type { Metadata } from 'next'
import { PT_Sans_Caption } from 'next/font/google'

import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

const PTSansCaption = PT_Sans_Caption({
    subsets: ['latin'],
    weight: ['400', '700']
})

export const metadata: Metadata = {
    title: 'M13',
    description: 'M13 e-commerce website',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={PTSansCaption.className}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}