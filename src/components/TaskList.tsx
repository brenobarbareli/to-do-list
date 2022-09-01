import { Trash } from 'phosphor-react';
import style from './TaskList.module.css';

export function TaskList() {
  return (
    <div className={style.global}>
      <header className={style.header}>
        <strong className={style.created}>
          Tarefas Criadas <span>5</span>
        </strong>
        <strong className={style.concluded}>
          Concluídas <span> 2 de 5</span>
        </strong>
      </header>
      <div className={style.task}>
        <input type='checkbox'></input>
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
        <button className={style.trash}>
          <Trash size={24} />
        </button>
      </div>
    </div>
  );
}
