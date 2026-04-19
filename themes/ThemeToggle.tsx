"use client"

import { MoonStar, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle(){

    const [dark, setDark] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if(savedTheme === "dark"){
            setDark(true)
        }else if(savedTheme === "light"){
            setDark(false)
        }
    }, [])

    useEffect(() => {
        const doc = document.documentElement;
        if(dark){
            doc.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }else{
            doc.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark])

    return (
        <button onClick={() => setDark(!dark)}>
            {dark ? (<FaSun className="hover:text-amber-200  cursor-pointer" />) : (<FaMoon className="hover:text-indigo-600 cursor-pointer"/>)}
        </button>
    )
}