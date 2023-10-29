import React from 'react'
import { FinancialRequestListItem } from './financialRequestListItem'

type FinancialRequestListProps = {
    financialRequests: FinancialRequest[],
    selectedItem: string,
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>,
}

export const FinancialRequestList = (props: FinancialRequestListProps) => {

    const { financialRequests, selectedItem, setSelectedItem } = props

  return (
    <>
    {financialRequests.map((financialRequest) => (
        <FinancialRequestListItem
            key={financialRequest.id}
            financialRequest={financialRequest}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
        />
    ))}
    </>
  )
}
