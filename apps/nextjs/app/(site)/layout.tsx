import Footer from 'components/shared/footers/footer';
import Header from 'components/shared/headers/header';
import Lines from 'components/shared/layout/lines';
import ScrollToTop from 'components/shared/layout/scroll-to-top';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import '../globals.css';
const inter = Inter({ subsets: ['latin'] });

import ToasterContext from 'components/shared/toaster';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`dark:bg-black ${inter.className}`}>
                <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
                    <Lines />
                    <Header />
                    <ToasterContext />
                    {children}
                    <Footer />
                    <ScrollToTop />
                </ThemeProvider>
            </body>
        </html>
    );
}
