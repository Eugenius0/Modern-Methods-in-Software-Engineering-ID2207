import React, { useState } from 'react'
import styles from './styles.module.css'

export type EventRequestListItemProps = {
    eventRequest: EventRequest
    selectedItem: string,
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>,
}

export const EventRequestListItem = (props: EventRequestListItemProps) => {

    const {item, details, itemSelected} = styles
    const { eventRequest, selectedItem, setSelectedItem } = props 

    const [showDetails, setShowDetails] = useState(false)

    const toggleShowDetails = () => {
      setShowDetails(!showDetails)
      !showDetails ? setSelectedItem(eventRequest.eventType) : setSelectedItem('')
    };

  return (
    <div key={eventRequest.id}>
        <div className={eventRequest.eventType === selectedItem ? itemSelected : item} onClick={toggleShowDetails}>
            {eventRequest.eventType}
            <br /> <br />
            from {eventRequest.startDate} to {eventRequest.endDate}
        </div>
        {eventRequest.eventType === selectedItem && showDetails && (
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
