import type { Metadata } from "next";
import { DashboardClient } from "@/components/dashboard/dashboard-client";

export const metadata: Metadata = {
  title: "Professional Dashboard",
  description: "SPLAX customer dashboard for account status, cart activity, order process, and shopping actions.",
  openGraph: {
    title: "Professional Dashboard | SPLAX",
    description: "Manage account, cart, orders, and support from the SPLAX dashboard."
  }
};

export default function DashboardPage() {
  return <DashboardClient />;
}
