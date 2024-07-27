import React from 'react'

async function getQuotes() {
    const res = await fetch('https://zenquotes.io/api/random', { cache: "no-cache" })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        console.error(await res.json());
        return;
    }

    return res.json()
}

export default async function Quotes() {
    const quotes = await getQuotes()
    return (
        <div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
            <blockquote className='font-extralight text-2xl'>{quotes[0].q}</blockquote>
            <footer className='font-semibold text-lg italic'>— {quotes[0].a}</footer>
        </div>
    )
}
function awaitgetQuotes() {
    throw new Error('Function not implemented.');
}

