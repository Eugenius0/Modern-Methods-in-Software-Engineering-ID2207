import React, { useState } from 'react'
import styles from './styles.module.css'

export type RecruitmentRequestListItemProps = {
    recruitmentRequest: RecruitmentRequest,
    selectedItem: string,
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>,
}

export const RecruitmentRequestListItem = (props: RecruitmentRequestListItemProps) => {

    const {item, details, itemSelected} = styles
    const { recruitmentRequest, selectedItem, setSelectedItem } = props 

    const [showDetails, setShowDetails] = useState(false)

    const toggleShowDetails = () => {
        setShowDetails(!showDetails)
        !showDetails ? setSelectedItem(recruitmentRequest.jobTitle) : setSelectedItem('')
    };

  return (
    <div key={recruitmentRequest.id}>
        <div className={recruitmentRequest.jobTitle === selectedItem ? itemSelected : item} onClick={toggleShowDetails}>
            {recruitmentRequest.jobTitle}
            <br /> <br />
            Contract Type: {recruitmentRequest.contractType}
        </div>
        {recruitmentRequest.jobTitle === selectedItem && showDetails && (
          <div className={details}>
          Requesting Department: {recruitmentRequest.requestingDepartment} <br />
          Years of experience: {recruitmentRequest.yearsOfExperience} <br />
          Preferences: {recruitmentRequest.jobDescription}
          </div>
        )}
    </div>
  )
}
