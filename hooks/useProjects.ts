import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { get, post, patch, del } from "@/lib/api";
import { HydraCollection } from "@/types/api";
import { Project } from "@/types/project";

export function useActiveProject() {
  return useQuery({
    queryKey: ["projects", "active"],
    queryFn: () => get<Project>("/projects/active"),
  });
}

export function useGetAllProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: () => get<HydraCollection<Project>>("/projects"),
  });
}

export function useProjectsByUser(userId: number | undefined) {
  return useQuery({
    queryKey: ["projects", userId],
    queryFn: () =>
      get<HydraCollection<Project>>(`/projects?user=/api/users/${userId}`),
    enabled: userId !== undefined,
  });
}

export function useCreateProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (project: Partial<Project>) =>
      post<Project>("/projects", project),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
}

export function useUpdateProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, ...body }: Partial<Project> & { id: number }) =>
      patch<Project>(`/projects/${id}`, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
}

export function useDeleteProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => del(`/projects/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
}
