import { ClipboardText } from 'phosphor-react';

import style from './EmptyTask.module.css';

export function EmptyTask() {
  return (
    <div className={style.emptyTask}>
      <ClipboardText size={56} weight='thin' className={style.icon} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
