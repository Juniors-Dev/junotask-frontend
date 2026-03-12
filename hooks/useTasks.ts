import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { get, post, patch, del } from "@/lib/api";
import { HydraCollection } from "@/types/api";
import { Task, CreateTask } from "@/types/task";

export function useGetAllTasks() {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: () => get<HydraCollection<Task>>("/tasks"),
  });
}

export function useTasksByUser(userId: number | undefined) {
  return useQuery({
    queryKey: ["tasks", userId],
    queryFn: () =>
      get<HydraCollection<Task>>(`/tasks?user=/api/users/${userId}`),
    enabled: userId !== undefined,
  });
}

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (task: CreateTask) => post<Task>("/tasks", task),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}

export function useUpdateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, ...body }: Partial<Task> & { id: number }) =>
      patch<Task>(`/tasks/${id}`, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => del(`/tasks/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}
