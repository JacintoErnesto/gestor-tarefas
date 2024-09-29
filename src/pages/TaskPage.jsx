import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

const TaskPage = () => {
  const [searchParams] = useSearchParams();
  const navegate = useNavigate();
  function backToPageAllTask() {
    navegate(-1);
  }
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen justify-center flex bg-slate-500 p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex items-center justify-between m-6">
          <button onClick={backToPageAllTask} className="mr-4">
            <ChevronLeftIcon className="text-slate-100" />
          </button>

          <h1 className="text-2xl sm:text-3xl text-slate-100 font-bold flex-1 text-center">
            Detalhes da Tarefa
          </h1>
        </div>

        <div className="bg-slate-200 rounded-md p-4">
          <h2 className="text-xl text-slate-700 font-bold">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
