import Link from "next/link"
import Image from "next/image"
import Footer from "../@/components/Footer"
import Navbar from "../@/components/Navbar"
import ScrollToTop from "../@/components/ScrollToTop"

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">

            {/* ---------- HEADER ---------- */}
            <Navbar />

            {/* ---------- CONTENT ---------- */}
            <main className="flex-1">
                <div className="container max-w-4xl mx-auto px-6 py-16">
                    {children}
                </div>
            </main>

            <Footer />
            <ScrollToTop />
        </div>
    )
}
