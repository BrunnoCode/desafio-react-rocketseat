import logoTodo from "../../assets/Logo.svg";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from 'react-icons/ai'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoTodo} />

      <form className={styles.newTaskForm}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
          </button>
      </form>
    </header> 
  );
}
