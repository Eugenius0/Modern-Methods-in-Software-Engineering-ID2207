import React, { useContext, useState } from 'react'
import styles from './styles.module.css'
import taskData from '../../mockData/taskData.json'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App'
import { TaskList } from '../../components/taskList'

export default function TaskDistribution() {

    const {container, gridContainer, title, eventRequestList, listContent, pending, scsApproved, fmFeedback, amApproved, scheduledMeeting, rejected, feedback, buttons, button, submitButton, btnGreen, btnRed} = styles

    const photographyTasks = taskData?.filter((task) => task.subTeam === "Photography" && task.status === "pending")
    const musicTasks = taskData?.filter((task) => task.subTeam === "Music")
    const graphDesignTasks = taskData?.filter((task) => task.subTeam === "Graph Design")
    const decorationsTasks = taskData?.filter((task) => task.subTeam === "Decorations")
    const networkSupportTasks = taskData?.filter((task) => task.subTeam === "Network Support")
    const commentedtasks = taskData?.filter((task) => task.status === "commented")

    const { userRole } = useContext(UserContext)

    const [feedbackValue, setFeedbackValue] = useState('')
    const handleFeedbackChange = (event: any) => {
      setFeedbackValue(event.target.value);
    };

  return (
    <>
    <div className={container}>
    <div className={title}>
          Task Distribution
    </div>
    {userRole === 'PM' ?
    <div className={buttons}>
      <Link to="/createTask" className={button}>Create Task</Link>
      <Link to="/staffRecruitment" className={button}>Staff Recruitment</Link>
      <Link to="/financialRequests" className={button}>Financial Requests</Link>
    </div> :
      userRole === 'ST' ?
      <>
      <textarea
        rows={4}         
        cols={50}
        className={feedback}       
        value={feedbackValue}
        onChange={handleFeedbackChange}
        placeholder="Enter your comment here"
      />
      <div>
        <button className={submitButton} type="submit">Submit</button>
      </div> 
        </> : <></>
    }
    <div className={gridContainer}>
      <div className={eventRequestList}>
      <div className={rejected}>
        Photography
      </div>
      <div className={listContent}>
      {photographyTasks.length !== 0 ?
        <TaskList tasks={photographyTasks} /> : <div>Empty list</div>}
      </div>
      </div>
      <div className={eventRequestList}>
      <div className={pending}>
        Music
      </div>
      <div className={listContent}>
      {musicTasks.length !== 0 ?
        <TaskList tasks={musicTasks} /> : <div>Empty list</div>}
      </div>
      </div>
      <div className={eventRequestList}>
      <div className={scsApproved}>
        Graph Design
      </div>
      <div className={listContent}>
      {graphDesignTasks.length !== 0 ?
        <TaskList tasks={graphDesignTasks} /> : <div>Empty list</div>}
      </div>
      </div>
      <div className={eventRequestList}>
      <div className={fmFeedback}>
        Decorations
      </div>
      <div className={listContent}>
      {decorationsTasks.length !== 0 ?
        <TaskList tasks={decorationsTasks} /> : <div>Empty list</div>}
      </div>
      </div>
      <div className={eventRequestList}>
      <div className={amApproved}>
        Network Support
      </div>
      <div className={listContent}>
      {networkSupportTasks.length !== 0 ?
        <TaskList tasks={networkSupportTasks} /> : <div>Empty list</div>}
      </div>
      </div>
      <div className={eventRequestList}>
      <div className={scheduledMeeting}>
        Commented
      </div>
      <div className={listContent}>
      {commentedtasks.length !== 0 ?
        <TaskList tasks={commentedtasks} /> : <div>Empty list</div>}
      </div>
      </div>
    </div>
    </div>
      </>
  )
}
