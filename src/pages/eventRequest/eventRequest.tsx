import React from 'react'
import styles from './styles.module.css'
import { EventRequestList } from '../../components/eventRequestList'
import eventRequestData from '../../mockData/eventRequestData.json'

export default function EventRequest() {

    const {container, gridContainer, title, eventRequestList, listContent, pending, approved, declined} = styles

    const pendingRequests = eventRequestData?.filter((eventRequest) => eventRequest.status === "pending")
    const approvedRequests = eventRequestData?.filter((eventRequest) => eventRequest.status === "approved")
    const declinedRequests = eventRequestData?.filter((eventRequest) => eventRequest.status === "declined")

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
        <EventRequestList eventRequests={declinedRequests} /> : <div><br />Empty list</div>}
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
      <div className={approved}>
        Approved
      </div>
      <div className={listContent}>
      {approvedRequests.length !== 0 ?
        <EventRequestList eventRequests={approvedRequests} /> : <div><br />Empty list</div>}
      </div>
      </div>
    </div>
    </div>
      </>
  )
}
