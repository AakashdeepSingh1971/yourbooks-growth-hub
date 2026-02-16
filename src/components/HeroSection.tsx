import { Button } from "@/components/ui/button";
import { Shield, Cloud, CheckCircle, IndianRupee } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";

const badges = [
  { icon: CheckCircle, label: "GST Ready" },
  { icon: Cloud, label: "Cloud-Based" },
  { icon: Shield, label: "Secure" },
  { icon: IndianRupee, label: "Made for India" },
];

const HeroSection = () => (
  <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-section-gradient">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-6 animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-tight tracking-tight text-foreground">
            Smart GST Accounting Software for{" "}
            <span className="text-gradient">Growing Indian Businesses</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Manage Sales, Purchase, GST, Inventory, Banking & Reports in One
            Powerful Platform.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" asChild>
              <a href="#contact">Start Free Trial</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Book Free Demo</a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            {badges.map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-card rounded-full px-3 py-1.5 card-shadow"
              >
                <b.icon size={14} className="text-primary" />
                {b.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right – Dashboard mockup */}
        <div className="animate-fade-up [animation-delay:200ms] opacity-0">
          <div className="rounded-xl overflow-hidden card-shadow-hover border border-border">
            <img
              src={dashboardMockup}
              alt="YourBooks Dashboard"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
