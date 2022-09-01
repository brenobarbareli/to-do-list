import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskList } from './components/TaskList';
import './Global.css';

export function App() {
  return (
    <div>
      <Header />
      <div>
        <NewTask />
      </div>
      <TaskList />
    </div>
  );
}
