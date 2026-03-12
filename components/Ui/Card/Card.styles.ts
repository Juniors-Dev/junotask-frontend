import { Stats } from "@/enums/stats";
import { AdminStats } from "@/enums/adminStats";

export const statsCardStyles: Record<Stats, string> = {
  [Stats.ACTIVE]: "card-highlight flex-1 min-w-48",
  [Stats.REVIEW]: "card flex-1 min-w-48 border-l-4 border-l-amber-400",
  [Stats.DONE]: "card flex-1 min-w-48 border-l-4 border-l-accent-dark",
  [Stats.LEAVE]: "card flex-1 min-w-48 border-l-4 border-l-purple-400",
};

export const statsIconStyles: Record<Stats, string> = {
  [Stats.ACTIVE]: "icon-box bg-white/20 text-white",
  [Stats.REVIEW]: "icon-box bg-amber-50 text-amber-600",
  [Stats.DONE]: "icon-box bg-accent/30 text-accent-dark",
  [Stats.LEAVE]: "icon-box bg-purple-50 text-purple-600",
};

export const statsTagStyles: Record<Stats, string> = {
  [Stats.ACTIVE]: "text-xs font-semibold text-blue-100 bg-white/20 px-2 py-1 rounded",
  [Stats.REVIEW]: "text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded",
  [Stats.DONE]: "text-xs font-semibold text-accent-dark bg-accent/30 px-2 py-1 rounded",
  [Stats.LEAVE]: "text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded",
};

export const adminCardStyles: Record<AdminStats, string> = {
  [AdminStats.PENDING]: "card-highlight flex-1 min-w-48",
  [AdminStats.EMPLOYEES]: "card flex-1 min-w-48 border-l-4 border-l-emerald-400",
  [AdminStats.PROJECTS]: "card flex-1 min-w-48 border-l-4 border-l-violet-400",
};

export const adminIconStyles: Record<AdminStats, string> = {
  [AdminStats.PENDING]: "icon-box bg-white/20 text-white",
  [AdminStats.EMPLOYEES]: "icon-box bg-emerald-50 text-emerald-600",
  [AdminStats.PROJECTS]: "icon-box bg-violet-50 text-violet-600",
};

export const adminTagStyles: Record<AdminStats, string> = {
  [AdminStats.PENDING]: "text-xs font-semibold text-blue-100 bg-white/20 px-2 py-1 rounded",
  [AdminStats.EMPLOYEES]: "text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded",
  [AdminStats.PROJECTS]: "text-xs font-semibold text-violet-600 bg-violet-50 px-2 py-1 rounded",
};
