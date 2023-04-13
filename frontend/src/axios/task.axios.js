import axios from "axios";

export const getTasks = async () => {
  return (await axios.get("/tasks")).data;
};
export const addTask = async (task) => {
  return (await axios.post("tasks/add", task)).data;
};
export const editTask = async (task) => {
  return (await axios.patch(`tasks/${task.taskID}/edit`, task)).data;
};
export const deleteTask = async (task) => {
  return (await axios.delete(`tasks/${task}/delete`, task)).data;
};
