import { CheckCircle, Circle, Trash } from 'phosphor-react';

import style from './Task.module.css';

interface props {
  id: number;
  concluded: boolean;
  text: string;
  handleConcludedTask: (id: number) => void;
  handleDeletedTask: (id: number) => void;
}

export function Task({
  id,
  concluded,
  text,
  handleConcludedTask,
  handleDeletedTask,
}: props) {
  return (
    <li className={concluded ? style.taskCheck : style.taskUncheck}>
      <span onClick={() => handleConcludedTask(id)}>
        {concluded ? (
          <CheckCircle size={24} className={style.check} />
        ) : (
          <Circle size={24} className={style.uncheck} />
        )}
      </span>
      <p>{text}</p>
      <button onClick={() => handleDeletedTask(id)} className={style.trash}>
        <Trash size={24} />
      </button>
    </li>
  );
}
