import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button.jsx";

function Tasks({ tasks, onTaskClick, onTaskDeleteClick }) {
    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);

        navigate(`/task?${query.toString()}`);
    }
    function handleTaskClick(taskId) {
        onTaskClick(taskId);
    }

    return (
        <div className="p-6 bg-slate-200 rounded-md shadow">
            <div className="max-h-[60vh] overflow-y-auto">
                {tasks.length === 0 ? (
                    <div className="text-2xl font-bold text-center text-slate-500 py-8">Sem tarefas</div>
                ) : (
                    <ul className="space-y-4">
                        {tasks.map((task) => (
                            <li key={task.id} className="flex gap-2">
                                <button
                                    onClick={() => handleTaskClick(task.id)}
                                    className="bg-slate-400 text-left w-full text-white p-2 rounded-md"
                                >
                                    <span className={task.isCompleted ? "line-through text-red-700" : ""}>
                                        {task.title}
                                    </span>
                                    {task.isCompleted ? " ✅ " : " ⛔ "}
                                </button>
                                <Button
                                    onClick={() => onSeeDetailsClick(task)}
                                >
                                    <ChevronRightIcon />
                                </Button>
                                <Button
                                    onClick={() => onTaskDeleteClick(task.id)}
                                >
                                    <TrashIcon />
                                </Button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Tasks;