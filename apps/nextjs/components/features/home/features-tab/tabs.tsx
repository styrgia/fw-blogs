'use client';
import React, { createContext, ReactNode, useContext, useState } from 'react';
import featuresTabData from '~/components/features/home/features-tab/data';
import { FeaturesTabItem } from '~/components/features/home/features-tab/item';

type TabContextValue = { currentTab: string; setCurrentTab(t: string): void };

const TabsContext = createContext<TabContextValue>({} as TabContextValue);

export function TabsProvider({ children }: { children: ReactNode }) {
    const [currentTab, setCurrentTab] = useState('tabOne');
    return <TabsContext.Provider value={{ currentTab, setCurrentTab }}>{children}</TabsContext.Provider>;
}

export function TabTriggers() {
    const { currentTab, setCurrentTab } = useContext(TabsContext);

    return (
        <>
            <div
                onClick={() => setCurrentTab('tabOne')}
                className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                    currentTab === 'tabOne'
                        ? 'active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary'
                        : ''
                }`}
            >
                <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                    <p className="text-metatitle3 font-medium text-black dark:text-white">01</p>
                </div>
                <div className="md:w-3/5 lg:w-auto">
                    <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                        Clean User Interface
                    </button>
                </div>
            </div>
            <div
                onClick={() => setCurrentTab('tabTwo')}
                className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                    currentTab === 'tabTwo'
                        ? 'active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary'
                        : ''
                }`}
            >
                <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                    <p className="text-metatitle3 font-medium text-black dark:text-white">02</p>
                </div>
                <div className="md:w-3/5 lg:w-auto">
                    <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                        Essential Business Pages
                    </button>
                </div>
            </div>
            <div
                onClick={() => setCurrentTab('tabThree')}
                className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                    currentTab === 'tabThree'
                        ? 'active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary'
                        : ''
                }`}
            >
                <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                    <p className="text-metatitle3 font-medium text-black dark:text-white">03</p>
                </div>
                <div className="md:w-3/5 lg:w-auto">
                    <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                        Fully Functional Integrations
                    </button>
                </div>
            </div>
        </>
    );
}

export function TabsContent() {
    const { currentTab } = useContext(TabsContext);

    return (
        <>
            {featuresTabData.map(feature => (
                <div className={feature.id === currentTab ? 'block' : 'hidden'} key={feature.id}>
                    <FeaturesTabItem featureTab={feature} />
                </div>
            ))}
        </>
    );
}
