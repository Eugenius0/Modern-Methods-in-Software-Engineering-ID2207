import React, { useContext } from 'react'
import styles from './styles.module.css'
import financialRequestData from '../../mockData/financialRequestData.json'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App'
import { FinancialRequestList } from '../../components/financialRequestList'

export default function Stafffinancial() {

    const {container, gridContainer, title, eventRequestList, listContent, pending, scsApproved, rejected, buttons, button, btnGreen, btnRed} = styles

    const pendingRequests = financialRequestData?.filter((financialRequest) => financialRequest.status === "pending")
    const ApprovedRequests = financialRequestData?.filter((financialRequest) => financialRequest.status === "approved")
    const rejectedRequests = financialRequestData?.filter((financialRequest) => financialRequest.status === "rejected")

    const { userRole } = useContext(UserContext)

  return (
    <>
    <div className={container}>
    <div className={title}>
          Financial Requests
    </div>
    {userRole === 'PM' || userRole === 'SM' ?
    <div className={buttons}>
      <Link to="/createfinancialRequest" className={button}>Create financial Request</Link>
    </div> :
    userRole === 'FM' ?
    <div className={buttons}>
      <Link to="/financialRequest" className={button} id={btnGreen}>Approve</Link>
      <Link to="/financialRequest" className={button} id={btnRed}>Reject</Link>
      </div> : <></>
    }
    <div className={gridContainer}>
      <div className={eventRequestList}>
      <div className={rejected}>
        Rejected
      </div>
      <div className={listContent}>
      {rejectedRequests.length !== 0 ?
        <FinancialRequestList financialRequests={rejectedRequests} /> : <div>Empty list</div>}
      </div>
      </div>
      <div className={eventRequestList}>
      <div className={pending}>
        Pending
      </div>
      <div className={listContent}>
      {pendingRequests.length !== 0 ?
        <FinancialRequestList financialRequests={pendingRequests} /> : <div>Empty list</div>}
      </div>
      </div>
      <div className={eventRequestList}>
      <div className={scsApproved}>
        Approved
      </div>
      <div className={listContent}>
      {ApprovedRequests.length !== 0 ?
        <FinancialRequestList financialRequests={ApprovedRequests} /> : <div>Empty list</div>}
      </div>
      </div>
    </div>
    </div>
      </>
  )
}
