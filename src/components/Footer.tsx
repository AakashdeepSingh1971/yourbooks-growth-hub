import { Mail, Phone, MapPin } from "lucide-react";

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
      { label: "CRM", href: "#features" },
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
  <footer className="bg-foreground text-primary-foreground/70">
    <div className="container mx-auto pt-16 pb-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        {/* Brand + Contact */}
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold text-primary-foreground mb-3">YourBooks</h3>
          <p className="text-sm leading-relaxed mb-6 max-w-xs">
            Cloud-based GST accounting & business management software built for Indian businesses.
          </p>
          <div className="space-y-3">
            <a href="mailto:support@yourbooks.in" className="flex items-center gap-2 text-sm hover:text-primary-foreground transition-colors">
              <Mail size={16} className="shrink-0" />
              support@yourbooks.in
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-2 text-sm hover:text-primary-foreground transition-colors">
              <Phone size={16} className="shrink-0" />
              +91 98765 43210
            </a>
            <div className="flex items-start gap-2 text-sm">
              <MapPin size={16} className="shrink-0 mt-0.5" />
              <span>India</span>
            </div>
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
          <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary-foreground transition-colors">Refund Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
