import React from 'react'
import { RecruitmentRequestListItem } from './recruitmentRequestListItem'

type RecruitmentRequestListProps = {
    recruitmentRequests: RecruitmentRequest[],
    selectedItem: string,
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>,
}

export const RecruitmentRequestList = (props: RecruitmentRequestListProps) => {

    const { recruitmentRequests, selectedItem, setSelectedItem } = props

  return (
    <>
    {recruitmentRequests.map((recruitmentRequest: any) => (
        <RecruitmentRequestListItem
            key={recruitmentRequest.id}
            recruitmentRequest={recruitmentRequest}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
        />
    ))}
    </>
  )
}
