import { ITask } from "@/components/templates/UserProfile"

interface Props {
  data: ITask
  removeTask: (id: number) => void
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export function Item({ data, removeTask, toggleTaskStatus }: Props) {
  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, value: !data.isChecked })
  }

  function handleRemove() {
    removeTask(data.id)
  }

  return (
    <div className="w-full flex flex-row items-center">
      <label className="w-full flex flex-row items-center gap-4" htmlFor="checkbox" onClick={handleTaskToggle}>
        <input readOnly type="checkbox" checked={data.isChecked} />
        <p>
          {data.text}
        </p>
      </label>
      <button onClick={handleRemove}>
        <p>Remover</p>
      </button>
    </div>
  )
}
