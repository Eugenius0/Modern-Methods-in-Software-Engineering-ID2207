import React, { useState } from 'react'
import styles from './styles.module.css'

export type TaskListItemProps = {
    task: Task
    selectedItem: string,
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>,
}

export const TaskListItem = (props: TaskListItemProps) => {

    const {item, details, itemSelected} = styles
    const { task, selectedItem, setSelectedItem } = props 

    const [showDetails, setShowDetails] = useState(false)

    const toggleShowDetails = () => {
        setShowDetails(!showDetails)
        !showDetails ? setSelectedItem(task.title) : setSelectedItem('')
      };

  return (
    <div key={task.id}>
        <div className={task.title === selectedItem ? itemSelected : item} onClick={toggleShowDetails}>
            {task.title}
            <br /> <br />
        </div>
        {task.title === selectedItem && showDetails && (
          <div className={details}>
          Sub-Team: {task.subTeam} <br />
          Description: {task.description} <br />
          Assigned to: {task.assignedTo} <br />
          Comment: {task.comment} <br />
          </div>
        )}
    </div>
  )
}
