import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  mobile: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  mobile?: string;
  email?: string;
}

const ContactSection = () => {
  const [form, setForm] = useState<FormData>({ name: "", mobile: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^\d{10}$/.test(form.mobile)) e.mobile = "Enter a valid 10-digit mobile number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((p) => ({ ...p, [field]: undefined }));
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-hero-gradient">
        <div className="container mx-auto flex flex-col items-center justify-center text-center text-primary-foreground py-12">
          <CheckCircle2 size={56} className="mb-4" />
          <h2 className="text-3xl font-bold mb-2">Thank You!</h2>
          <p className="text-primary-foreground/80 max-w-md">
            We've received your details. Our team will reach out to you shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-hero-gradient">
      <div className="container mx-auto max-w-xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Get Started with YourBooks Today
          </h2>
          <p className="text-primary-foreground/80 mt-3">
            Fill in your details and we'll set you up in no time.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl p-8 card-shadow-hover space-y-5"
          noValidate
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Full Name <span className="text-destructive">*</span>
            </label>
            <Input
              placeholder="Rahul Sharma"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Mobile Number <span className="text-destructive">*</span>
            </label>
            <Input
              placeholder="9876543210"
              value={form.mobile}
              onChange={(e) => handleChange("mobile", e.target.value.replace(/\D/g, "").slice(0, 10))}
              className={errors.mobile ? "border-destructive" : ""}
            />
            {errors.mobile && <p className="text-xs text-destructive mt-1">{errors.mobile}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Email ID <span className="text-destructive">*</span>
            </label>
            <Input
              type="email"
              placeholder="rahul@company.com"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Message <span className="text-muted-foreground">(Optional)</span>
            </label>
            <Textarea
              placeholder="Tell us about your requirements..."
              rows={3}
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin mr-2" /> Submitting…
              </>
            ) : (
              "Submit & Get Started"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
