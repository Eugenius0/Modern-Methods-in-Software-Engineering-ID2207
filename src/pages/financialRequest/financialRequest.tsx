import React, { useContext, useState } from 'react'
import styles from './styles.module.css'
import financialRequestData from '../../mockData/financialRequestData.json'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App'
import { FinancialRequestList } from '../../components/financialRequestList'

export default function Stafffinancial() {

    const {container, gridContainer, title, eventRequestList, listContent, pending, scsApproved, rejected, selected, buttons, button, btnGreen, btnRed} = styles

    const pendingRequests = financialRequestData?.filter((financialRequest) => financialRequest.status === "pending")
    const ApprovedRequests = financialRequestData?.filter((financialRequest) => financialRequest.status === "approved")
    const rejectedRequests = financialRequestData?.filter((financialRequest) => financialRequest.status === "rejected")

    const { userRole } = useContext(UserContext)

    const [selectedItem, setSelectedItem] = useState('')

  return (
    <>
    <div className={container}>
    <div className={title}>
          Financial Requests
    </div>
    {userRole === 'PM' || userRole === 'SM' ?
    <div className={buttons}>
      <Link to="/createFinancialRequest" className={button}>Create Financial Request</Link>
    </div> :
    userRole === 'FM' ?
    <div className={buttons}>
        {selectedItem !== '' && 
        <>
        <div className={selected}>
        Selected Event Request: {selectedItem}
        </div>
      <Link to="/financialRequest" className={button} id={btnGreen}>Approve</Link>
      <Link to="/financialRequest" className={button} id={btnRed}>Reject</Link>
      </>
    }
      </div> : <></>
    }
    <div className={gridContainer}>
      <div className={eventRequestList}>
      <div className={rejected}>
        Rejected
      </div>
      <div className={listContent}>
      {rejectedRequests.length !== 0 ?
        <FinancialRequestList financialRequests={rejectedRequests} selectedItem={selectedItem} setSelectedItem={setSelectedItem} /> : <div>Empty list</div>}
      </div>
      </div>
      <div className={eventRequestList}>
      <div className={pending}>
        Pending
      </div>
      <div className={listContent}>
      {pendingRequests.length !== 0 ?
        <FinancialRequestList financialRequests={pendingRequests} selectedItem={selectedItem} setSelectedItem={setSelectedItem} /> : <div>Empty list</div>}
      </div>
      </div>
      <div className={eventRequestList}>
      <div className={scsApproved}>
        Approved
      </div>
      <div className={listContent}>
      {ApprovedRequests.length !== 0 ?
        <FinancialRequestList financialRequests={ApprovedRequests} selectedItem={selectedItem} setSelectedItem={setSelectedItem} /> : <div>Empty list</div>}
      </div>
      </div>
    </div>
    </div>
      </>
  )
}
