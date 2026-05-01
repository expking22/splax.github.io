import type { Metadata } from "next";
import { AdminDashboardClient } from "@/components/admin/admin-dashboard-client";

export const metadata: Metadata = {
  title: "Owner Admin Dashboard",
  description: "Owner-only SPLAX dashboard for adding products, viewing inventory details, and managing order collection.",
  robots: {
    index: false,
    follow: false
  },
  openGraph: {
    title: "Owner Admin Dashboard | SPLAX",
    description: "Private owner dashboard for SPLAX ecommerce operations."
  }
};

export default function AdminPage() {
  return <AdminDashboardClient />;
}
