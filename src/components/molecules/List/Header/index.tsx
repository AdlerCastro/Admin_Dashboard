interface Props {
  tasksCounter: number
  checkedTasksCounter: number
}

export function ListHeader({ tasksCounter, checkedTasksCounter }: Props) {
  return (
    <header className="flex flex-row justify-between items-center my-6 border-b-2 pb-4">
      <aside className="flex flex-row gap-3">
        <p>Tarefas criadas</p>
        <span>{tasksCounter}</span>
      </aside>
      <aside className="flex flex-row gap-3">
        <p>Concluídas</p>
        <span>
          {tasksCounter === 0
            ? tasksCounter
            : `${checkedTasksCounter} de ${tasksCounter}`}
        </span>
      </aside>
    </header>
  )
}
