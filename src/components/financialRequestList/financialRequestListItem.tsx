import React, { useState } from 'react'
import styles from './styles.module.css'

export type FinancialRequestListItemProps = {
    financialRequest: FinancialRequest
}

export const FinancialRequestListItem = (props: FinancialRequestListItemProps) => {

    const {item, details} = styles
    const { financialRequest } = props 

    const [showDetails, setShowDetails] = useState(false)

    const toggleShowDetails = () => {
      setShowDetails(!showDetails);
    };

  return (
    <div key={financialRequest.id}>
        <div className={item} onClick={toggleShowDetails}>
            {financialRequest.requiredAmount}
            <br /> <br />
            requested by: {financialRequest.requestingDepartment}
        </div>
        {showDetails && (
          <div className={details}>
          Reason: {financialRequest.Reason} <br />
          Project reference: {financialRequest.projectReference} <br />
          </div>
        )}
    </div>
  )
}
