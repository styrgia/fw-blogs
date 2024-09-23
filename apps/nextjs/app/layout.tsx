import { domAnimation, LazyMotion } from 'framer-motion';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`dark:bg-black ${inter.className}`}>
                <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
                    <LazyMotion features={domAnimation} strict>
                        {children}
                    </LazyMotion>
                </ThemeProvider>
            </body>
        </html>
    );
}
