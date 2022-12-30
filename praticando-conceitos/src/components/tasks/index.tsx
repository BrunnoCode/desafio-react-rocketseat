import { ITask } from "../../App";
import { Task } from "../task/task";
import styles from "./tasks.module.css";

interface Props {
  tasks: ITask[];
  onDelete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete }: Props) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas Criadas</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p className={styles.txtpurple}>Concluídas</p>
          <span>
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete}/>
        ))}
      </div>
    </section>
  );
}
