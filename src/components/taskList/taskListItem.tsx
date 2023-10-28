import React, { useState } from 'react'
import styles from './styles.module.css'

export type TaskListItemProps = {
    task: Task
}

export const TaskListItem = (props: TaskListItemProps) => {

    const {item, details} = styles
    const { task } = props 

    const [showDetails, setShowDetails] = useState(false)

    const toggleShowDetails = () => {
      setShowDetails(!showDetails);
    };

  return (
    <div key={task.id}>
        <div className={item} onClick={toggleShowDetails}>
            {task.title}
            <br /> <br />
        </div>
        {showDetails && (
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
