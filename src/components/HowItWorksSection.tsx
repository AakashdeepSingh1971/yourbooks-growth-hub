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
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">How It Works</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
          Get Started in 4 Simple Steps
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          From sign-up to reports — you'll be running in no time.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.title} className="text-center group relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-border z-0" />
              )}
              <div className="relative z-10 mx-auto w-16 h-16 rounded-2xl bg-hero-gradient flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-lg">
                <s.icon size={28} className="text-primary-foreground" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-card border-2 border-primary text-xs font-bold text-primary flex items-center justify-center shadow-sm">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
