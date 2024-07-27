'use client'
import React from 'react'
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from 'next-themes'

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()
    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <button
            onClick={changeTheme}
            className="p-1 border-black dark:border-current border-2 rounded-md hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_rgba(1,1,1,1)] transition-all fixed bottom-8 right-8 z-0 dark:bg-[#121212] bg-white">
            {theme === 'light' ?
                <SunIcon className="size-10 text-black dark:text-white rounded-full p-2" /> :
                <MoonIcon className="size-10 text-black dark:text-white rounded-full p-2" />}
        </button>
    )
}
