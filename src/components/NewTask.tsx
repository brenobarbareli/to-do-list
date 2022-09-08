import style from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';

interface NewTaskProps {
  handleNewTask: (task: string) => void;
}

export function NewTask(props: NewTaskProps) {
  const [newTask, setNewTask] = useState('');

  function handleChangeNewTask(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTask(event.target.value);
  }

  function handleCreateNewTask() {
    if (newTask.length === 0) {
      toast.error('Não é possível incluir uma tarefa vazia');
    } else {
      props.handleNewTask(newTask);
      setNewTask('');
    }
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
