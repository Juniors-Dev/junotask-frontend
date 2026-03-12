import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { get, post, patch, del } from "@/lib/api";
import { HydraCollection } from "@/types/api";
import { User } from "@/types/user";

export function useGetAllUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => get<HydraCollection<User>>("/users"),
  });
}

export function useGetMe() {
  return useQuery({
    queryKey: ["me"],
    queryFn: () => get<User>("/me"),
  });
}

export function useUser(id: number) {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => get<User>(`/users/${id}`),
  });
}

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user: Partial<User>) => post<User>("/users", user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, ...body }: Partial<User> & { id: number }) =>
      patch<User>(`/users/${id}`, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => del(`/users/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
