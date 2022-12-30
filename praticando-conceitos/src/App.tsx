import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/tasks";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    { id: "teste", title: "teste", isCompleted: true },
    { id: "testcxce", title: "teste 2", isCompleted: false },
  ]);

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function removeTask(taskId: string) {
    const newTask = tasks.filter((task) => task.id != taskId);
    setTasks(newTask);
  }

  function toggleCheckedTask(taskId: string) {
    const newTasks = tasks.map( task => {
      if (task.id === taskId) {
        
      }
    }) 
  }

  return (
    <>
      <Header onAddTask={addTask}/>
      <Tasks tasks={tasks} onDelete={removeTask}/>
    </>
  );
}

export default App;
