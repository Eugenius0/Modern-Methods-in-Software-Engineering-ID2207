import React from 'react'
import { EventRequestListItem } from './eventRequestListItem'

type EventRequestListProps = {
    eventRequests: EventRequest[]
}

export const EventRequestList = (props: EventRequestListProps) => {

    const { eventRequests } = props

  return (
    <>
    {eventRequests.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()).map((eventRequest) => (
        <EventRequestListItem
            key={eventRequest.id}
            eventRequest={eventRequest}
        />
    ))}
    </>
  )
}
