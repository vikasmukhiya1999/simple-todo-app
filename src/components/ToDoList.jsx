import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, addTask, toggleTask, deleteTask, editTask }) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-grow border p-2 rounded"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add a new task..."
        />
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </form>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <ToDoItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
