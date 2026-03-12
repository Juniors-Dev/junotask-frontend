import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { get, post, patch, del } from "@/lib/api";
import { HydraCollection } from "@/types/api";
import { Leave, LeaveInput } from "@/types/leave";

export function usePendingLeaves() {
  return useQuery({
    queryKey: ["leaves", "pending"],
    queryFn: () => get<HydraCollection<Leave>>("/leaves?state=1"),
  });
}

export function useGetFilteredLeaves($state: number) {
  return useQuery({
    queryKey: ["leaves", "filtered", $state],
    queryFn: () =>
      get<HydraCollection<Leave>>(
        $state === 0 ? "/leaves" : `/leaves?state=${$state}`,
      ),
  });
}

export function useActiveLeave() {
  return useQuery({
    queryKey: ["leaves", "active"],
    queryFn: () => get<Leave>("/leaves/active"),
  });
}

export function useGetAllLeaves() {
  return useQuery({
    queryKey: ["leaves"],
    queryFn: () => get<HydraCollection<Leave>>("/leaves"),
  });
}

export function useLeavesByUser(userId: number | undefined) {
  return useQuery({
    queryKey: ["leaves", userId],
    queryFn: () =>
      get<HydraCollection<Leave>>(`/leaves?user=/api/users/${userId}`),
    enabled: userId !== undefined,
  });
}

export function useLatestLeaveByUser(userId: number | undefined) {
  return useQuery({
    queryKey: ["leaves", userId, "latest"],
    queryFn: () =>
      get<HydraCollection<Leave>>(
        `/leaves?user=/api/users/${userId}&order[startDate]=desc&itemsPerPage=1`,
      ),
    enabled: userId !== undefined,
  });
}

export function useCreateLeave() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (leave: LeaveInput) => post<Leave>("/leaves", leave),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leaves"] });
    },
  });
}

export function useUpdateLeave() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, ...body }: Partial<Leave> & { id: number }) =>
      patch<Leave>(`/leaves/${id}`, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leaves"] });
    },
  });
}

export function useDeleteLeave() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => del(`/leaves/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leaves"] });
    },
  });
}
