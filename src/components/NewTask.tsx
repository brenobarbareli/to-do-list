import style from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

interface NewTaskProps {
  handleNewTask: (task: string) => void;
}

export function NewTask(props: NewTaskProps) {
  const [newTask, setNewTask] = useState('');

  function handleChangeNewTask(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTask(event.target.value);
  }

  function handleCreateNewTask() {
    props.handleNewTask(newTask);
    setNewTask('');
  }

  return (
    <div className={style.NewTask}>
      <textarea
        className={style.input}
        value={newTask}
        name='TaskText'
        placeholder='Adicione uma nova tarefa'
        onChange={handleChangeNewTask}></textarea>
      <button
        className={style.button}
        type='submit'
        title='Criar nova task'
        onClick={handleCreateNewTask}>
        Criar
        <PlusCircle size={16} />
      </button>
    </div>
  );
}
