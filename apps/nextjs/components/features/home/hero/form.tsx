'use client';
import React, { ChangeEvent, FormEventHandler, useState } from 'react';

export default function HeroForm() {
    const [email, setEmail] = useState('');

    const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
        event.preventDefault();
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap gap-5">
                <input
                    value={email}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your email address"
                    className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                />
                <button
                    aria-label="get started button"
                    className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                >
                    Get Started
                </button>
            </div>
        </form>
    );
}
