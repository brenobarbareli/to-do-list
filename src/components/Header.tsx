import style from './Header.module.css';
import rocket from '../assets/rocket.svg';
import todo from '../assets/todo.svg';

export function Header() {
  return (
    <div className={style.header}>
      <img src={rocket} />
      <img src={todo} />
    </div>
  );
}
