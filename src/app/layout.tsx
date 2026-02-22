import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YourBooks – GST Accounting Software for India",
  description:
    "Cloud-based GST accounting & business management software for Indian businesses. Manage sales, purchase, inventory, banking & compliance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
