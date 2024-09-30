import {
  CheckIcon,
  ChevronRightIcon,
  EditIcon,
  Trash2Icon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, deletarTask, onEditTask }) {
  const navegate = useNavigate();
  function seeDetails(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navegate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className=" flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 text-left text-white p-2 rounded-md w-full flex items-center gap-2 ${
              task.isCompleted && "line-through "
            }`}
          >
            {task.isCompleted && <CheckIcon />}
            {task.title}
          </button>
          <Button onClick={() => seeDetails(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => deletarTask(task.id)}>
            <Trash2Icon />
          </Button>
          <Button onClick={() => onEditTask(task)}>
            <EditIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}
export default Tasks;
