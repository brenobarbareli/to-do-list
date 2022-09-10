import { TaskListType } from '../App';
import { EmptyTask } from './EmptyTask';
import { Task } from './Task';
import style from './TaskList.module.css';

interface TaskListProps {
  list: TaskListType;
  handleConcludedTask: (id: number) => void;
  handleDeletedTask: (id: number) => void;
}

export function TaskList({
  list,
  handleConcludedTask,
  handleDeletedTask,
}: TaskListProps) {
  const listConcluded = list.filter((item) => item.concluded).length;

  function handleConcluded(id: number) {
    handleConcludedTask(id);
  }
  function handleDeleted(id: number) {
    handleDeletedTask(id);
  }

  return (
    <div className={style.global}>
      <header className={style.header}>
        <p className={style.created}>
          Tarefas Criadas <span>{list.length}</span>
        </p>
        <p className={style.concluded}>
          Concluídas{' '}
          <span>
            {listConcluded} de {list.length}
          </span>
        </p>
      </header>
      {list.length <= 0 ? (
        <EmptyTask />
      ) : (
        <ul>
          {list.map((item) => (
            <Task
              key={item.id}
              id={item.id}
              concluded={item.concluded}
              handleConcludedTask={handleConcluded}
              handleDeletedTask={handleDeleted}
              text={item.text}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
