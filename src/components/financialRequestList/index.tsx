import React from 'react'
import { FinancialRequestListItem } from './financialRequestListItem'

type FinancialRequestListProps = {
    financialRequests: FinancialRequest[]
}

export const FinancialRequestList = (props: FinancialRequestListProps) => {

    const { financialRequests } = props

  return (
    <>
    {financialRequests.map((financialRequest) => (
        <FinancialRequestListItem
            key={financialRequest.id}
            financialRequest={financialRequest}
        />
    ))}
    </>
  )
}
