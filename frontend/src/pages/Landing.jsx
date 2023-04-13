import { useState } from "react";
import AddTask from "../components/AddTask";
import CategoryContainer from "../components/CategoryContainer";
import TaskLayout from "../components/TaskLayout";
import { useGetTasks } from "../hooks/task.hook";
import EditTask from "../components/EditTask";
const Landing = () => {
  const { data } = useGetTasks();
  const [isDropDownClicked, setIsDropDownClicked] = useState(true);
  const [isEditBtnClicked, setIsEditBtnClicked] = useState(false);
  const [errors, setErrors] = useState("");
  return (
    <div className="flex flex-col gap-3 p-2 max-w-[45rem] md:m-auto">
      <AddTask setErrors={setErrors} />
      <CategoryContainer
        isDropDownClicked={isDropDownClicked}
        setIsDropDownClicked={setIsDropDownClicked}
      />
      {isDropDownClicked &&
        (data && data.length ? (
          data.map((task) => {
            return (
              <div className="flex flex-col gap-3" key={task.taskID}>
                <TaskLayout
                  taskID={task.taskID}
                  taskName={task.taskName}
                  taskDescription={task.taskDescription}
                  setIsEditBtnClicked={setIsEditBtnClicked}
                />
                {isEditBtnClicked && (
                  <EditTask taskID={task.taskID} setErrors={setErrors} />
                )}
              </div>
            );
          })
        ) : (
          <span className="px-4">No Tasks</span>
        ))}
      {errors && <span className="text-red-500 p-3">{errors}</span>}
    </div>
  );
};
export default Landing;
