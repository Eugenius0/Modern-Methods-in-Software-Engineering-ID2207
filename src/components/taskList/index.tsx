import React from 'react'
import { TaskListItem } from './taskListItem'

type TaskListProps = {
    tasks: Task[]
}

export const TaskList = (props: TaskListProps) => {

    const { tasks } = props

  return (
    <>
    {tasks.map((task) => (
        <TaskListItem
            key={task.id}
            task={task}
        />
    ))}
    </>
  )
}
