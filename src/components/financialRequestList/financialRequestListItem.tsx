import React, { useState } from 'react'
import styles from './styles.module.css'

export type FinancialRequestListItemProps = {
    financialRequest: FinancialRequest,
    selectedItem: string,
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>,
}

export const FinancialRequestListItem = (props: FinancialRequestListItemProps) => {

    const {item, details, itemSelected} = styles
    const { financialRequest, selectedItem, setSelectedItem } = props 

    const [showDetails, setShowDetails] = useState(false)

    const toggleShowDetails = () => {
        setShowDetails(!showDetails)
        !showDetails ? setSelectedItem(financialRequest.requiredAmount) : setSelectedItem('')
    };

  return (
    <div key={financialRequest.id}>
        <div className={financialRequest.requiredAmount === selectedItem ? itemSelected : item} onClick={toggleShowDetails}>
            {financialRequest.requiredAmount}
            <br /> <br />
            requested by: {financialRequest.requestingDepartment}
        </div>
        {financialRequest.requiredAmount === selectedItem && showDetails && (
          <div className={details}>
          Reason: {financialRequest.Reason} <br />
          Project reference: {financialRequest.projectReference} <br />
          </div>
        )}
    </div>
  )
}
