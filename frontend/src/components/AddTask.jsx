import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useAddTask } from "../hooks/task.hook";
import TaskForm from "./TaskForm";
const AddTask = ({ setErrors }) => {
  const addTaskMutation = useAddTask();

  const [addActive, setAddActive] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const addBtnOnClick = () => setAddActive((prevState) => !prevState);

  const addTask = (task) => {
    setTaskName("");
    setTaskDescription("");
    setErrors("");
    addTaskMutation.mutate(task, {
      onSuccess: addBtnOnClick,
      onError: (err) => setErrors(err.response.data),
    });
  };

  return (
    <div className="flex flex-col gap-5 p-4 w-full max-w-[45rem] md:m-auto">
      <AiOutlinePlus
        className="self-end hover:cursor-pointer"
        onClick={addBtnOnClick}
      />
      {addActive && (
        <TaskForm
          taskName={taskName}
          taskDescription={taskDescription}
          setTaskName={setTaskName}
          setTaskDescription={setTaskDescription}
          OnClick={() => addTask({ taskName, taskDescription })}
        />
      )}
    </div>
  );
};
export default AddTask;
