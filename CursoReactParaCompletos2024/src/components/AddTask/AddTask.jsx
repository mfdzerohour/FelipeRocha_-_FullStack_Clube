import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input
                type="text"
                placeholder="Digite o título da tarefa"
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md focus:ring-slate-500 focus:ring-2 focus:outline-none"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                id="task-title"
            />

            <input
                type="text"
                placeholder="Digite a descrição da tarefa"
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md focus:ring-slate-500 focus:ring-2 focus:outline-none"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                id="task-description"
            />

            <button
                onClick={() => {
                    if (title.trim() === '') {
                        alert('Por favor, preencha o título da tarefa.');
                        document.getElementById('task-title').focus();
                        return;
                    }
                    if (description.trim() === '') {
                        alert('Por favor, preencha a descrição da tarefa.');
                        document.getElementById('task-description').focus();
                        return;
                    }
                    onAddTaskSubmit(title, description);
                    setTitle("");
                    setDescription("");
                }}
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
                id="add-task-button"
            >
                Adicionar Tarefa
            </button>
        </div>
    );
}

export default AddTask;
