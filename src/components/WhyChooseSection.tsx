import { CheckCircle, Smile, Cloud, Boxes, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Built for Indian GST Compliance",
    desc: "Stay compliant with auto GST calculations, e-invoicing, e-way bills, and one-click GSTR filing.",
  },
  {
    icon: Smile,
    title: "Easy to Use Interface",
    desc: "Clean, intuitive design so you spend less time learning and more time growing your business.",
  },
  {
    icon: Cloud,
    title: "Cloud-Based & Secure",
    desc: "Access your data anytime, anywhere with enterprise-grade encryption and daily backups.",
  },
  {
    icon: Boxes,
    title: "All-in-One Business Suite",
    desc: "Sales, purchase, inventory, banking, CRM and reports — everything under one roof.",
  },
  {
    icon: TrendingUp,
    title: "Affordable & Scalable",
    desc: "Start free and scale as you grow. Plans designed for startups, SMEs, and enterprises alike.",
  },
];

const WhyChooseSection = () => (
  <section id="why-us" className="py-20 bg-section-gradient">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Why Choose <span className="text-gradient">YourBooks</span>?
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Built from the ground up for Indian businesses that mean business.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="bg-card rounded-xl p-6 border border-border transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <b.icon size={22} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
