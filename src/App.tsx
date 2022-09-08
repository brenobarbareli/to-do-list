import { useState } from 'react';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskList } from './components/TaskList';
import './Global.css';

import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';

export type TaskListType = {
  id: number;
  concluded: boolean;
  text: string;
}[];

export function App() {
  const [list, setList] = useState<TaskListType>(() => {
    const storagedList = localStorage.getItem('taskList');

    if (storagedList) {
      return JSON.parse(storagedList);
    }

    return [];
  });

  function handleConcluded(idToConcluded: number) {
    const newList = list.map((item) =>
      item.id === idToConcluded
        ? { ...item, concluded: !item.concluded }
        : item,
    );
    setList(newList);

    localStorage.setItem('taskList', JSON.stringify(newList));
  }

  function handleDeleted(idToDelete: number) {
    const taskWithoutDeletedOne = list.filter((item) => {
      return item.id !== idToDelete;
    });
    setList(taskWithoutDeletedOne);
    localStorage.setItem('taskList', JSON.stringify(taskWithoutDeletedOne));
  }

  function newTaskAdd(task: string) {
    const newTaskText = { concluded: false, text: task, id: Math.random() };
    const newAddTask = [...list, newTaskText];
    setList(newAddTask);

    localStorage.setItem('taskList', JSON.stringify(newAddTask));
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
      <ToastContainer />
    </div>
  );
}
