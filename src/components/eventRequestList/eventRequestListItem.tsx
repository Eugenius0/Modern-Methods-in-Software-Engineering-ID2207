import React, { useState } from 'react'
import styles from './styles.module.css'

export type EventRequestListItemProps = {
    eventRequest: EventRequest
}

export const EventRequestListItem = (props: EventRequestListItemProps) => {

    const {item, details} = styles
    const { eventRequest } = props 

    const [showDetails, setShowDetails] = useState(false)

    const toggleShowDetails = () => {
      setShowDetails(!showDetails);
    };

  return (
    <div key={eventRequest.id}>
        <div className={item} onClick={toggleShowDetails}>
            {eventRequest.eventType}
            <br /> <br />
            from {eventRequest.startDate} to {eventRequest.endDate}
        </div>
        {showDetails && (
          <div className={details}>
          Client Name: {eventRequest.clientName} <br />
          Expected Attendees: {eventRequest.expectedAttendees} <br />
          Preferences: {eventRequest.preferences} <br />
          Expected Budget: {eventRequest.expectedBudget}
          </div>
        )}
    </div>
  )
}
