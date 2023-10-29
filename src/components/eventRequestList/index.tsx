import React from 'react'
import { EventRequestListItem } from './eventRequestListItem'

type EventRequestListProps = {
    eventRequests: EventRequest[],
    selectedItem: string,
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>,
}

export const EventRequestList = (props: EventRequestListProps) => {

    const { eventRequests, selectedItem, setSelectedItem } = props

  return (
    <>
    {eventRequests.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()).map((eventRequest) => (
        <EventRequestListItem
            key={eventRequest.id}
            eventRequest={eventRequest}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
        />
    ))}
    </>
  )
}
