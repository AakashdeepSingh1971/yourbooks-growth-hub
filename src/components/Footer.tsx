import { Mail, Phone, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/yourbooks-logo.png";
import ContactSection from "./ContactSection";

const footerLinks = [
  {
    heading: "Product",
    links: [
      { label: "Sales", href: "#features" },
      { label: "Purchase", href: "#features" },
      { label: "GST Compliance", href: "#features" },
      { label: "Inventory", href: "#features" },
      { label: "Banking", href: "#features" },
      { label: "Reports", href: "#features" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "API", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
];

const Footer = () => (
  <div className="bg-primary pt-24 pb-16">
    <ContactSection />
    <div className="container mx-auto">
      <footer className="bg-foreground text-primary-foreground/70 rounded-2xl overflow-hidden">
        <div className="px-8 md:px-12 pt-12 pb-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
            {/* Brand + Social */}
            <div className="lg:col-span-2">
              <img src={logo} alt="YourBooks" className="h-8 brightness-0 invert mb-3" />
              <p className="text-sm leading-relaxed mb-6 max-w-xs">
                Cloud-based GST accounting & business management software built for Indian businesses.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-primary-foreground transition-colors"><Facebook size={18} /></a>
                <a href="#" className="hover:text-primary-foreground transition-colors"><Instagram size={18} /></a>
                <a href="#" className="hover:text-primary-foreground transition-colors"><Twitter size={18} /></a>
                <a href="#" className="hover:text-primary-foreground transition-colors"><Linkedin size={18} /></a>
              </div>
            </div>

            {/* Link columns */}
            {footerLinks.map((col) => (
              <div key={col.heading}>
                <h4 className="font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">
                  {col.heading}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-sm hover:text-primary-foreground transition-colors">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p>© {new Date().getFullYear()} YourBooks. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Legal</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Site Map</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
);

export default Footer;
