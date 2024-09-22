import { Footer } from '~/components/shared/footers/footer';
import { Header } from '~/components/shared/headers/header';
import { Lines } from '~/components/shared/layout/lines';
import { ScrollToTop } from '~/components/shared/layout/scroll-to-top';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import '../globals.css';
import { LazyMotion, domAnimation } from 'framer-motion';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`dark:bg-black ${inter.className}`}>
                <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
                    <LazyMotion features={domAnimation} strict>
                        <Lines />
                        <Header />
                        {children}
                        <Footer />
                        <ScrollToTop />
                        <Toaster position="top-center" reverseOrder={false} />
                    </LazyMotion>
                </ThemeProvider>
            </body>
        </html>
    );
}
