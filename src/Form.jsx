import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Functionality } from "./App";

const Form = () => {
  const [task, setNewTask] = useState("");
  const { addItem } = useContext(Functionality);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      toast.error("Please Add A Task");
      return;
    }
    addItem(task);
    setNewTask("");
    toast.success("Task added successfully");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>To Do List</h4>
      <div className="form-control">
        <input
          type="text"
          value={task}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit" className="btn">
          Add Task
        </button>
      </div>
    </form>
  );
};
export default Form;
