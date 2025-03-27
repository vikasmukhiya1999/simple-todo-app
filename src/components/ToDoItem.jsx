import { useState } from "react";

function ToDoItem({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center bg-gray-200 p-2 rounded">
      {isEditing ? (
        <>
          <input
            type="text"
            className="border p-1 rounded"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
            onClick={handleEdit}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span
            className={`cursor-pointer ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
          </span>
          <div className="space-x-2">
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
