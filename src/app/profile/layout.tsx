import type { Metadata } from "next"
import { PT_Sans_Caption } from "next/font/google"

const PTSansCaption = PT_Sans_Caption({
    subsets: ["latin"],
    weight: ["400", "700"]
})

export const metadata: Metadata = {
    title: "",
    description: "",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={PTSansCaption.className}>
                {children}
            </body>
        </html>
    )
}
