import style from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';

export function NewTask() {
  return (
    <div className={style.NewTask}>
      <input
        type='text'
        className={style.input}
        placeholder='Adicione uma nova tarefa'></input>
      <button type='submit' className={style.button} title='Criar nova task'>
        Criar
        <PlusCircle size={16} />
      </button>
    </div>
  );
}
