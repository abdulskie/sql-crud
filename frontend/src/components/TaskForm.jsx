const TaskForm = ({
  taskName,
  taskDescription,
  setTaskName,
  setTaskDescription,
  OnClick,
}) => {
  const taskNameOnChange = (e) => setTaskName(e.target.value);
  const taskDescriptionOnChange = (e) => setTaskDescription(e.target.value);
  return (
    <div className="flex flex-col gap-5">
      <input
        type="text"
        placeholder="Task Name"
        name="taskName"
        value={taskName}
        className="border p-3"
        onChange={taskNameOnChange}
      />
      <textarea
        rows="4"
        cols="50"
        placeholder="Task Description"
        name="taskDescription"
        value={taskDescription}
        className="border p-3 min-h-[8rem]"
        onChange={taskDescriptionOnChange}
      />
      <button
        className="border self-end p-1 w-24 hover:cursor-pointer"
        onClick={OnClick}
      >
        Submit
      </button>
    </div>
  );
};
export default TaskForm;
