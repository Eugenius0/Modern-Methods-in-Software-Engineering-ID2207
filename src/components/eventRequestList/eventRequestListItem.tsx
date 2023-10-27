import React from 'react'
import styles from './styles.module.css'

export type EventRequestListItemProps = {
    eventRequest: EventRequest
}

export const EventRequestListItem = (props: EventRequestListItemProps) => {

    const {item} = styles
    const { eventRequest } = props 

  return (
    <div key={eventRequest.id}>
        <div className={item}>
            {eventRequest.eventType}
            {eventRequest.startDate}
            {eventRequest.endDate}
        </div>
    </div>
  )
}
