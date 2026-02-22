"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <button
            onClick={scrollToTop}
            className={`
        fixed bottom-6 right-6 z-50
        h-12 w-12 rounded-full
        bg-primary text-primary-foreground
        shadow-lg hover:scale-105 transition-all duration-300
        flex items-center justify-center
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
            aria-label="Scroll to top"
        >
            <ArrowUp size={20} />
        </button>
    )
}
