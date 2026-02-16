const footerLinks = [
  {
    heading: "Product",
    links: ["Sales", "Purchase", "GST Compliance", "Inventory", "Banking", "Reports", "CRM"],
  },
  {
    heading: "Company",
    links: ["About Us", "Careers", "Blog", "Contact"],
  },
  {
    heading: "Support",
    links: ["Help Center", "Documentation", "API", "Status"],
  },
];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/70 pt-16 pb-8">
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-primary-foreground mb-3">YourBooks</h3>
          <p className="text-sm leading-relaxed">
            Cloud-based GST accounting & business management software built for Indian businesses.
          </p>
        </div>

        {footerLinks.map((col) => (
          <div key={col.heading}>
            <h4 className="font-semibold text-primary-foreground mb-3 text-sm uppercase tracking-wider">
              {col.heading}
            </h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm hover:text-primary-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p>© {new Date().getFullYear()} YourBooks. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
