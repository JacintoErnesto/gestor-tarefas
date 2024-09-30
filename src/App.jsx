import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // useEffect(() => {
  //   const fetchTaskApi = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       {
  //         method: "GET",
  //       }
  //     );

  //     const data = await response.json();

  //     setTasks(data);
  //   };
  //   fetchTaskApi();
  // }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(newTasks);
  }

  function deletarTask(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function addTask(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
    };
    console.log([...tasks, newTask]);
    setTasks([...tasks, newTask]);
  }
  function updateTask(id, title, description) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title, description } : task
    );
    setTasks(updatedTasks);
    setTaskToEdit(null); // Limpa a tarefa de edição após salvar
  }

  function onEditTask(task) {
    setTaskToEdit(task); // Define a tarefa que será editada
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] mx-auto space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask
          addTask={addTask}
          taskToEdit={taskToEdit}
          updateTask={updateTask}
        />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deletarTask={deletarTask}
          onEditTask={onEditTask}
        />
      </div>
    </div>
  );
}
export default App;
