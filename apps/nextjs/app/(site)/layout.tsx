import { Footer } from '~/components/shared/footers/footer';
import { Header } from '~/components/shared/headers/header';
import { Lines } from '~/components/shared/layout/lines';
import { ScrollToTop } from '~/components/shared/layout/scroll-to-top';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

export default function SiteLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Lines />

            <Header />

            <main>{children}</main>

            <Footer />

            <ScrollToTop />

            <Toaster position="top-center" reverseOrder={false} />
        </>
    );
}
