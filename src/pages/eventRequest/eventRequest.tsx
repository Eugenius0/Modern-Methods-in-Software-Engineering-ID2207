import React from 'react'
import styles from './styles.module.css'
import { EventRequestList } from '../../components/eventRequestList'
import eventRequestData from '../../mockData/eventRequestData.json'

export default function EventRequest() {

    const {container, gridContainer, title, eventRequestList, listContent, pending, scsApproved, fmFeedback, amApproved, scheduledMeeting, declined} = styles

    const pendingRequests = eventRequestData?.filter((eventRequest) => eventRequest.status === "pending")
    const scsApprovedRequests = eventRequestData?.filter((eventRequest) => eventRequest.status === "scsApproved")
    const declinedRequests = eventRequestData?.filter((eventRequest) => eventRequest.status === "declined")
    const fmFeedbackRequests = eventRequestData?.filter((eventRequest) => eventRequest.status === "fmFeedback")
    const amApprovedRequests = eventRequestData?.filter((eventRequest) => eventRequest.status === "amApproved")
    const scheduledMeetingRequests = eventRequestData?.filter((eventRequest) => eventRequest.status === "scheduledMeeting")

  return (
    <>
    <div className={container}>
    <div className={title}>
          Event Requests
      </div>
    <div className={gridContainer}>
      <div className={eventRequestList}>
      <div className={declined}>
        Declined
      </div>
      <div className={listContent}>
      {declinedRequests.length !== 0 ?
        <EventRequestList eventRequests={declinedRequests} /> : <div>Empty list</div>}
      </div>
      </div>
      <div className={eventRequestList}>
      <div className={pending}>
        Pending
      </div>
      <div className={listContent}>
      {pendingRequests.length !== 0 ?
        <EventRequestList eventRequests={pendingRequests} /> : <div>Empty list</div>}
      </div>
      </div>
      <div className={eventRequestList}>
      <div className={scsApproved}>
        SCS Approved
      </div>
      <div className={listContent}>
      {scsApprovedRequests.length !== 0 ?
        <EventRequestList eventRequests={scsApprovedRequests} /> : <div>Empty list</div>}
      </div>
      </div>
      <div className={eventRequestList}>
      <div className={fmFeedback}>
        FM Feedback
      </div>
      <div className={listContent}>
      {fmFeedbackRequests.length !== 0 ?
        <EventRequestList eventRequests={fmFeedbackRequests} /> : <div>Empty list</div>}
      </div>
      </div>
      <div className={eventRequestList}>
      <div className={amApproved}>
        AM Approved
      </div>
      <div className={listContent}>
      {amApprovedRequests.length !== 0 ?
        <EventRequestList eventRequests={amApprovedRequests} /> : <div>Empty list</div>}
      </div>
      </div>
      <div className={eventRequestList}>
      <div className={scheduledMeeting}>
        Scheduled Meeting
      </div>
      <div className={listContent}>
      {scheduledMeetingRequests.length !== 0 ?
        <EventRequestList eventRequests={scheduledMeetingRequests} /> : <div>Empty list</div>}
      </div>
      </div>
    </div>
    </div>
      </>
  )
}
