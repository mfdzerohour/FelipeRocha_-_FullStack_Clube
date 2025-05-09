import AddTask from "./components/AddTask/AddTask.jsx";
import Tasks from "./components/Tasks/Tasks.jsx";
import { useState, useEffect } from "react";
import { v4 } from "uuid";
import Title from "./components/Title/Title.jsx";

function App() {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || [
            {
                id: 1,
                title: "Estudar programação",
                description:
                    "Estudar programação para se tornar um desenvolvedor fullstack",
                isCompleted: false,
            },
            {
                id: 2,
                title: "Estudar inglês",
                description: "Estudar inglês para se tornar fluente",
                isCompleted: false,
            },
            {
                id: 3,
                title: "Estudar matemática",
                description:
                    "Estudar matemática para se tornar um desenvolvedor fullstack",
                isCompleted: false,
            },
        ]
    );

    function onTaskClick(taskId) {
        const newTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted,
                };
            } else {
                return task;
            }
        });
        setTasks(newTasks);
    }

    useEffect(() => {
        if (tasks) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, [tasks]);

    useEffect(() => {
        async function fetchTasks() {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/todos/?_limit=10",
                {
                    method: "GET",
                }
            );
            const data = await response.json();
            console.log("Dados recebidos da API:", data); // <-- Adicione esta linha
            // Adiciona uma descrição padrão se não existir
            const tasksWithDescription = data.map((task) => ({
                ...task,
                description: task.description || "Sem descrição disponível.",
            }));
            setTasks(tasksWithDescription);
        }
        fetchTasks();
    }, []);

    function onTaskDeleteClick(taskId) {
        const newTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(newTasks);
    }

    function onAddTaskSubmit(title, description) {
        if (!title.trim() || !description.trim()) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const newTask = {
            id: v4(),
            title,
            description,
            isCompleted: false,
        };

        setTasks([...tasks, newTask]);
    }

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] h-full flex flex-col space-y-4">
                <Title>Gerenciador de Tarefas</Title>
                <AddTask onAddTaskSubmit={onAddTaskSubmit} />
                <div className="flex-1 min-h-0">
                    <Tasks
                        tasks={tasks}
                        onTaskClick={onTaskClick}
                        onTaskDeleteClick={onTaskDeleteClick}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
