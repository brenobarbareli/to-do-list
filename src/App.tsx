import { useState } from 'react';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskList } from './components/TaskList';
import './Global.css';

export type TaskListType = {
  id: number;
  concluded: boolean;
  text: string;
}[];

export function App() {
  const [list, setList] = useState<TaskListType>([
    { concluded: false, text: 'teste', id: Math.random() },
    { concluded: false, text: 'teste 2', id: Math.random() },
  ]);

  function handleConcluded(idToConcluded: number) {
    const newList = list.map((item) =>
      item.id === idToConcluded
        ? { ...item, concluded: !item.concluded }
        : item,
    );
    setList(newList);
  }

  function handleDeleted(idToDelete: number) {
    const taskWithoutDeletedOne = list.filter((item) => {
      return item.id !== idToDelete;
    });
    setList(taskWithoutDeletedOne);
  }

  function newTaskAdd(task: string) {
    const newTaskText = { concluded: false, text: task, id: Math.random() };
    setList([...list, newTaskText]);
  }

  return (
    <div>
      <Header />
      <div>
        <NewTask handleNewTask={newTaskAdd} />
      </div>
      <TaskList
        list={list}
        handleConcludedTask={handleConcluded}
        handleDeletedTask={handleDeleted}
      />
    </div>
  );
}
