import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import ReduxProvider from "@/redux/provider";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
})

export const metadata: Metadata = {
    title: 'Cognifusion',
    description: 'Gongifusion is a platform that helps you to improve your social media life.',
    icons: {
        icon: '/assets/cognifusion.png',
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider
            appearance={{
                baseTheme: dark,
            }}>
            <html lang="en">
                <body className={poppins.variable}>
                    <ReduxProvider>
                        {children}
                    </ReduxProvider></body>
            </html>
        </ClerkProvider>
    )
}

