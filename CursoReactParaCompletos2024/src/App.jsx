import AddTask from "./components/AddTask/AddTask.jsx";

import Tasks from "./components/Tasks/Tasks.jsx";

import { useState, useEffect } from "react";

import { v4 } from "uuid";

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

    //Qual é a diferença entre este useEffect e o de cima?

    //O de cima é chamado sempre que tasks muda, enquanto o de baixo é chamado apenas uma vez quando o componente é montado ou página aberta na primeira vez.

    useEffect(() => {
        //Tive que criar uma função para assync por que o useEffect não aceita async diretamente.

        async function fetchTasks() {
            //CHAMAR API

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/todos/?_limit=10",

                {
                    method: "GET",
                }
            );

            //PEGAR OS DADOS QUE ELA RETORNA

            const data = await response.json();

            console.log(data); //VERIFICAR O QUE A API RETORNA

            //ARMAZENAR/PERSISTIR ESSES DADOS NO STATE

            setTasks(data);
        }

        //Aqui posso chamar a função assync que criei acima.

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
            <div className="w-[500px] space-y-4">
                <h1 className="text-3xl text-slate-100 font-bold text-center">
                    Gerenciador de Tarefas
                </h1>

                <AddTask onAddTaskSubmit={onAddTaskSubmit} />

                <Tasks
                    tasks={tasks}
                    onTaskClick={onTaskClick}
                    onTaskDeleteClick={onTaskDeleteClick}
                />
            </div>
        </div>
    );
}

export default App;
