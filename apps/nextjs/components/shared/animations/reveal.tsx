import * as m from 'framer-motion/m';
import { ReactNode } from 'react';
import { cn } from '~/lib/utils/cn';

type RevealProps = {
    children: ReactNode;
    dir?: 'up' | 'down' | 'left' | 'right';
    className?: string;
    delay?: number;
    duration?: number;
};

const calcHidden = (dir: Required<RevealProps['dir']>) => {
    switch (dir) {
        case 'down': {
            return { y: 20 };
        }
        case 'left': {
            return { x: -20 };
        }
        case 'right': {
            return { x: 20 };
        }
        default: {
            return { y: -20 };
        }
    }
};

export default function Reveal({ children, className, dir = 'up', duration = 1, delay = 0.1 }: RevealProps) {
    return (
        <m.div
            variants={{
                hidden: { opacity: 0, ...calcHidden(dir) },
                visible: { opacity: 1, ...(dir === 'up' || dir === 'down' ? { y: 0 } : { x: 0 }) },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration, delay }}
            viewport={{ once: true }}
            className={cn(className, 'animate_top')}
        >
            {children}
        </m.div>
    );
}
