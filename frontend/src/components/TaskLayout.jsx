import { BsCheckCircleFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { useDeleteTask } from "../hooks/task.hook";

const TaskLayout = ({
  taskID,
  taskName,
  taskDescription,
  setIsEditBtnClicked,
}) => {
  const deleteTaskMutation = useDeleteTask();

  const [isDropDownClicked, setIsDropDownClicked] = useState(false);

  const editTask = () => {
    setIsEditBtnClicked((prevState) => !prevState);
  };
  const deleteTask = (taskID) => {
    deleteTaskMutation.mutate(taskID);
  };
  return (
    <div className="border flex flex-col p-4 w-full max-w-[45rem] md:m-auto ">
      <div className="flex justify-between items-center h-8 w-[100%]">
        <div
          className="flex flex-1 gap-1 items-center hover:cursor-pointer"
          onClick={() => setIsDropDownClicked((prevState) => !prevState)}
        >
          <RiArrowDropDownLine
            className={!isDropDownClicked && `rotate-[270deg]`}
          />
          <span>{taskName}</span>
        </div>
        <BsCheckCircleFill className="text-lg hover:cursor-pointer invert-[80%] hover:invert-0" />
      </div>
      {isDropDownClicked && (
        <div className="flex flex-col gap-3 px-5">
          <p className="text-xs">{taskDescription}</p>
          <div className="flex justify-center gap-5">
            <button
              className="text-white bg-red-500 px-3 md:px-5 py-1 rounded-lg"
              onClick={() => deleteTask(taskID)}
            >
              Delete Task
            </button>
            <button
              className="text-white bg-gray-500 px-3 md:px-5 py-1 rounded-lg"
              onClick={() => editTask()}
            >
              Edit Task
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default TaskLayout;
