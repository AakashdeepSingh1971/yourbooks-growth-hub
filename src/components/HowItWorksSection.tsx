import { Building2, FileText, Calculator, BarChart3 } from "lucide-react";

const steps = [
  { icon: Building2, title: "Add Your Business", desc: "Set up your company profile, GST details, and preferences in minutes." },
  { icon: FileText, title: "Create Invoices", desc: "Generate GST-compliant invoices, quotations, and purchase orders effortlessly." },
  { icon: Calculator, title: "Track GST & Expenses", desc: "Automate ITC calculations, expense tracking, and bank reconciliation." },
  { icon: BarChart3, title: "Generate Reports & Grow", desc: "Get real-time insights with P&L, Balance Sheet, and GST reports." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 bg-card">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Get Started in 4 Simple Steps
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          From sign-up to reports — you'll be running in no time.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <div key={s.title} className="text-center group">
            <div className="relative mx-auto w-16 h-16 rounded-full bg-hero-gradient flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
              <s.icon size={28} className="text-primary-foreground" />
              <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-card border-2 border-primary text-xs font-bold text-primary flex items-center justify-center">
                {i + 1}
              </span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
