import React, { useState } from 'react'
import styles from './styles.module.css'

export type RecruitmentRequestListItemProps = {
    recruitmentRequest: RecruitmentRequest
}

export const RecruitmentRequestListItem = (props: RecruitmentRequestListItemProps) => {

    const {item, details} = styles
    const { recruitmentRequest } = props 

    const [showDetails, setShowDetails] = useState(false)

    const toggleShowDetails = () => {
      setShowDetails(!showDetails);
    };

  return (
    <div key={recruitmentRequest.id}>
        <div className={item} onClick={toggleShowDetails}>
            {recruitmentRequest.jobTitle}
            <br /> <br />
            Contract Type: {recruitmentRequest.contractType}
        </div>
        {showDetails && (
          <div className={details}>
          Requesting Department: {recruitmentRequest.requestingDepartment} <br />
          Years of experience: {recruitmentRequest.yearsOfExperience} <br />
          Preferences: {recruitmentRequest.jobDescription}
          </div>
        )}
    </div>
  )
}
