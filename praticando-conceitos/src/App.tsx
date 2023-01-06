import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/tasks";

const LOCAL_STORAGE = "savedTasks";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function loadSavedTasks() {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE);
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function setTasksAndSave(newTask: ITask[]) {
    setTasks(newTask);
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(newTask));
  }

  function addTask(taskTitle: string) {
    setTasksAndSave([
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
    setTasksAndSave(newTask);
  }

  function toggleCheckedTask(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={removeTask}
        onComplete={toggleCheckedTask}
      />
    </>
  );
}

export default App;
