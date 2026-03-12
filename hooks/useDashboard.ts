import { useQuery } from "@tanstack/react-query";
import { get } from "@/lib/api";
import { HydraCollection } from "@/types/api";
import { DashboardItem, DashboardCount } from "@/types/dashboard";

export function useDashboard() {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: () => get<HydraCollection<DashboardItem>>("/dashboard"),
  });
}

export function useDashboardCount() {
  return useQuery({
    queryKey: ["dashboard", "count"],
    queryFn: () => get<HydraCollection<DashboardCount>>("/dashboardCount"),
  });
}
