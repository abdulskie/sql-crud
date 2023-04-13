import { useState } from "react";
import { useEditTask } from "../hooks/task.hook";
import TaskForm from "./TaskForm";
const EditTask = ({ taskID, setErrors }) => {
  const editTaskMutation = useEditTask();
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const editTask = (task) => {
    editTaskMutation.mutate(task, {
      onError: (err) => setErrors(err.response.data),
    });
    setTaskName("");
    setTaskDescription("");
    setErrors("");
  };

  return (
    <div>
      <TaskForm
        taskName={taskName}
        taskDescription={taskDescription}
        setTaskName={setTaskName}
        setTaskDescription={setTaskDescription}
        OnClick={() => editTask({ taskID, taskName, taskDescription })}
      />
    </div>
  );
};
export default EditTask;
