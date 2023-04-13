import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTasks, addTask, deleteTask, editTask } from "../axios/task.axios";

export const useGetTasks = () => {
  return useQuery({ queryKey: ["tasks"], queryFn: getTasks });
};
export const useAddTask = () => {
  const queryClient = useQueryClient();
  return useMutation(addTask, {
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
};
export const useEditTask = () => {
  const queryClient = useQueryClient();
  return useMutation(editTask, {
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
};
export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteTask, {
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
};
