import React from 'react'
import { TaskListItem } from './taskListItem'

type TaskListProps = {
    tasks: Task[],
    selectedItem: string,
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>,
}

export const TaskList = (props: TaskListProps) => {

    const { tasks, selectedItem, setSelectedItem } = props

  return (
    <>
    {tasks.map((task) => (
        <TaskListItem
            key={task.id}
            task={task}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
        />
    ))}
    </>
  )
}
