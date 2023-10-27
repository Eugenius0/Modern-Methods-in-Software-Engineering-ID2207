import React from 'react'
import styles from './styles.module.css'
import { EventRequestList } from '../../components/eventRequestList'
import eventRequestData from '../../mockData/eventRequestData.json'

export default function EventRequest() {

    const {container, title, eventRequestList} = styles

  return (
    <>
    <div className={container}>
      <div className={title}>
          Event Requests
      </div>
      <div className={eventRequestList}>
        <EventRequestList eventRequests={eventRequestData} />
      </div>
    </div>
      </>
  )
}
