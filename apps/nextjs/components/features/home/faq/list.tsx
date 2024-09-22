'use client';

import faqData from '~/components/features/home/faq/faqData';
import { FAQItem } from '~/components/features/home/faq/FAQItem';
import { useState } from 'react';

export function FaqList() {
    const [activeFaq, setActiveFaq] = useState(1);

    const handleFaqToggle = (id: number) => {
        if (activeFaq === id) {
            setActiveFaq(0);
        } else {
            setActiveFaq(id);
        }
    };

    return (
        <div className="rounded-lg bg-white shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection">
            {faqData.map((faq, key) => (
                <FAQItem key={key} faqData={{ ...faq, activeFaq, handleFaqToggle }} />
            ))}
        </div>
    );
}
