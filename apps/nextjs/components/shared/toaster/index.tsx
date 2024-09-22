'use client';
import { Toaster } from 'react-hot-toast';

export default function ToasterWrapper() {
    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
}
