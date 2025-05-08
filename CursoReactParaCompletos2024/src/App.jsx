import AddTask from './components/AddTask/AddTask.jsx';
import Tasks from './components/Tasks/Tasks.jsx';
import { useState } from 'react';

function App(){
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar programação',
      description: "Estudar programação para se tornar um desenvolvedor fullstack",
      isCompleted: false,
    }, {
      id: 2,
      title: 'Estudar inglês',
      description: "Estudar inglês para se tornar fluente",
      isCompleted: false,
    }, {
      id: 3,
      title: 'Estudar matemática',
      description: "Estudar matemática para se tornar um desenvolvedor fullstack",
      isCompleted: false    
    },
  ]);

  function onTaskClick(taskId){
    const newTasks = tasks.map(task => {
      //PRECISO ATUALIZAR ESSA TAREFA
      if(task.id === taskId){
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }

        //NÃO PRECISO ATUALIZAR ESSA TAREFA
      } else {
        return task;
      }
    });

    setTasks(newTasks);
  }

  function onTaskDeleteClick(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }


  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onTaskDeleteClick={onTaskDeleteClick} />
      </div>
    </div>
  )
}

export default App;