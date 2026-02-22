"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Shield, Cloud, CheckCircle, IndianRupee, ArrowRight } from "lucide-react";

const badges = [
  { icon: CheckCircle, label: "GST Ready" },
  { icon: Cloud, label: "Cloud-Based" },
  { icon: Shield, label: "Bank-Grade Security" },
  { icon: IndianRupee, label: "Made for India" },
];

const HeroSection = () => (
  <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 bg-section-gradient" />
    <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/4" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl translate-y-1/2 -translate-x-1/4" />

    <div className="container mx-auto relative z-10">
      {/* Badge */}
      <div className="flex justify-center mb-8">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 rounded-full px-4 py-2 border border-primary/20">
          <CheckCircle size={14} />
          GST Compliant Accounting Software
        </span>
      </div>

      {/* Headline */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
          Smart GST Accounting for{" "}
          <span className="text-gradient">
            Growing Indian Businesses
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
          Manage Sales, Purchase, GST, Inventory, Banking & Reports in One
          Powerful Platform.
        </p>

        <div className="flex flex-wrap gap-4 pt-8 justify-center">
          <Button size="lg" className="text-base px-8 h-12" asChild>
            <a href="#contact">
              Start Free Trial <ArrowRight size={18} className="ml-2" />
            </a>
          </Button>

          <Button size="lg" variant="outline" className="text-base px-8 h-12" asChild>
            <a href="#contact">Book Free Demo</a>
          </Button>
        </div>

        <div className="flex flex-wrap gap-4 pt-8 justify-center">
          {badges.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground"
            >
              <b.icon size={16} className="text-primary" />
              {b.label}
            </span>
          ))}
        </div>
      </div>

      {/* Dashboard Mockup */}
      <div className="mt-16 max-w-5xl mx-auto">
        <div className="rounded-xl overflow-hidden border border-border bg-card p-2">
          <Image
            src="/dashboard-mockup.png"
            alt="YourBooks Dashboard - GST Accounting Software"
            width={1200}
            height={700}
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
