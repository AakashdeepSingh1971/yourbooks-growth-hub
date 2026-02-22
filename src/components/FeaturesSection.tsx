import {
  FileText, ShoppingCart, Receipt, RotateCcw,
  ClipboardList, PackageSearch, Wallet, Users,
  Calculator, FileCheck, FileSpreadsheet, Truck, CreditCard, BookOpen,
  Warehouse, Layers, BoxSelect, Factory, BarChart3,
  Landmark, Upload, BadgeIndianRupee,
  BookOpenCheck, TrendingUp, Scale, ListChecks, ShieldCheck,
  UserPlus, Contact
} from "lucide-react";

const featureGroups = [
  {
    title: "Sales Management",
    color: "bg-primary/10 text-primary",
    items: [
      { icon: FileText, label: "Quotations" },
      { icon: ShoppingCart, label: "Sales Orders" },
      { icon: Receipt, label: "Invoices" },
      { icon: RotateCcw, label: "Returns" },
    ],
  },
  {
    title: "Purchase Management",
    color: "bg-accent/10 text-accent",
    items: [
      { icon: ClipboardList, label: "Purchase Orders" },
      { icon: PackageSearch, label: "Purchase Invoices" },
      { icon: Wallet, label: "Expenses" },
      { icon: Users, label: "Vendor Management" },
    ],
  },
  {
    title: "GST & Compliance",
    color: "bg-destructive/10 text-destructive",
    items: [
      { icon: Calculator, label: "ITC Tracking" },
      { icon: FileCheck, label: "GSTR1, GSTR3B, GSTR9" },
      { icon: FileSpreadsheet, label: "E-Invoice" },
      { icon: Truck, label: "E-Way Bill" },
      { icon: CreditCard, label: "TDS" },
      { icon: BookOpen, label: "Debit/Credit Notes" },
    ],
  },
  {
    title: "Inventory Management",
    color: "bg-primary/10 text-primary",
    items: [
      { icon: Warehouse, label: "Store Management" },
      { icon: Layers, label: "Category" },
      { icon: BoxSelect, label: "Batch Tracking" },
      { icon: Factory, label: "Product & Production" },
      { icon: BarChart3, label: "Stock Summary" },
    ],
  },
  {
    title: "Banking",
    color: "bg-accent/10 text-accent",
    items: [
      { icon: Landmark, label: "Bank Accounts" },
      { icon: Upload, label: "Import Statements" },
      { icon: BadgeIndianRupee, label: "Payment Tracking" },
    ],
  },
  {
    title: "Reports",
    color: "bg-primary/10 text-primary",
    items: [
      { icon: BookOpenCheck, label: "Ledger" },
      { icon: TrendingUp, label: "Profit & Loss" },
      { icon: Scale, label: "Balance Sheet" },
      { icon: ListChecks, label: "Trial Balance" },
      { icon: ShieldCheck, label: "Audit Logs" },
    ],
  },
  {
    title: "CRM",
    color: "bg-accent/10 text-accent",
    items: [
      { icon: UserPlus, label: "Lead Management" },
      { icon: Contact, label: "Client Tracking" },
    ],
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-20 bg-card">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Features</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
          Everything You Need to Run Your Business
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Comprehensive modules designed for Indian businesses — from invoicing to GST filing.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {featureGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1 group"
          >
            <h3 className="font-semibold text-foreground mb-4 text-lg flex items-center gap-2">
              {group.title}
            </h3>
            <ul className="space-y-3">
              {group.items.map((item) => (
                <li key={item.label} className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  <span className={`w-8 h-8 rounded-lg ${group.color} flex items-center justify-center shrink-0`}>
                    <item.icon size={16} />
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
