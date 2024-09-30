import { useEffect, useState } from "react";
import Input from "./Input";

function AddTask({ addTask, taskToEdit, updateTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    }
  }, [taskToEdit]);

  const handleSubmit = () => {
    if (!title.trim() || !description.trim()) {
      return alert("Preencha o titulo e a descrição da tarefa");
    }
    if (taskToEdit) {
      // Atualiza a tarefa existente
      updateTask(taskToEdit.id, title, description);
    } else {
      // Adiciona uma nova tarefa
      addTask(title, description);
    }
    setTitle("");
    setDescription("");
  };
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o titulo da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-slate-500 text-white py-2 rounded-md font-medium"
      >
        {taskToEdit ? "Salvar Edição" : "Adicionar"}
      </button>
    </div>
  );
}

export default AddTask;
