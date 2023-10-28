import React from 'react'
import { RecruitmentRequestListItem } from './recruitmentRequestListItem'

type RecruitmentRequestListProps = {
    recruitmentRequests: RecruitmentRequest[]
}

export const RecruitmentRequestList = (props: RecruitmentRequestListProps) => {

    const { recruitmentRequests } = props

  return (
    <>
    {recruitmentRequests.map((recruitmentRequest: any) => (
        <RecruitmentRequestListItem
            key={recruitmentRequest.id}
            recruitmentRequest={recruitmentRequest}
        />
    ))}
    </>
  )
}
