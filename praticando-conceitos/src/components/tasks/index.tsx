import { Task } from '../task/task';
import styles from './tasks.module.css';

export function Tasks() {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas Criadas</p>
          <span>10</span>
        </div>
        <div>
          <p className={styles.txtpurple}>Concluídas</p>
          <span>10 de 10</span>
        </div>
      </header>
      <div className={styles.list}>
        <Task />
        <Task />
        <Task />
      </div>
    </section>
  )
}