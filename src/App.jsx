import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Default Task Just for Demonstartion", completed: false },
  ]);

  // Function to add a new task
  const addTask = (taskText) => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
    }
  };

  // Function to toggle task completion
  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Function to edit a task
  const editTask = (taskId, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <Header />
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-4">
        <ToDoList tasks={tasks} addTask={addTask} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} />
      </div>
    </div>
  );
}

export default App;
