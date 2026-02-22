"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Why Us", href: "/#why-us" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState(pathname.startsWith("/admin"));
  const router = useRouter();


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);

    setIsAdmin(isAdmin);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-card/95 backdrop-blur-md card-shadow py-3"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/yourbooks-logo.png"
            alt="YourBooks"
            width={140}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {!isAdmin &&
            navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}

          {isAdmin ? (
            <>
              <Button size="sm" variant="outline" onClick={() => router.push("/admin/contact")}>
                Inquiry
              </Button>
              <Button size="sm" variant="outline" onClick={() => router.push("/admin/logs")}>
                Logs
              </Button>
              <Button size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Button size="sm" asChild>
              <a href="#contact">Start Free Trial</a>
            </Button>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 pb-6 animate-fade-in">
          {!isAdmin &&
            navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}

          {isAdmin ? (
            <>
              <Button
                className="w-full mt-2"
                variant="outline"
                onClick={() => {
                  setMobileOpen(false);
                  router.push("/admin/contact");
                }}
              >
                Inquiry
              </Button>
              <Button
                className="w-full mt-2"
                variant="outline"
                onClick={() => {
                  setMobileOpen(false);
                  router.push("/admin/logs");
                }}
              >
                Logs
              </Button>
              <Button
                className="w-full mt-2"
                onClick={() => {
                  setMobileOpen(false);
                  handleLogout();
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button className="w-full mt-2" asChild>
              <a href="#contact" onClick={() => setMobileOpen(false)}>
                Start Free Trial
              </a>
            </Button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;