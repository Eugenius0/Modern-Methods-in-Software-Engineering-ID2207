import React, { useContext, useState } from 'react'
import styles from './styles.module.css'
import recruitmentRequestData from '../../mockData/recruitmentRequestData.json'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App'
import { RecruitmentRequestList } from '../../components/recruitmentRequestList'

export default function StaffRecruitment() {

    const {container, gridContainer, title, eventRequestList, listContent, pending, scsApproved, rejected, selected, buttons, button, btnGreen, btnRed} = styles

    const pendingRequests = recruitmentRequestData?.filter((recruitmentRequest) => recruitmentRequest.status === "pending")
    const ApprovedRequests = recruitmentRequestData?.filter((recruitmentRequest) => recruitmentRequest.status === "approved")
    const rejectedRequests = recruitmentRequestData?.filter((recruitmentRequest) => recruitmentRequest.status === "rejected")

    const { userRole } = useContext(UserContext)

    const [selectedItem, setSelectedItem] = useState('')

  return (
    <>
    <div className={container}>
    <div className={title}>
          Staff Recruitment
    </div>
    {userRole === 'PM' || userRole === 'SM' ?
    <div className={buttons}>
      <Link to="/createRecruitmentRequest" className={button}>Create Recruitment Request</Link>
    </div> :
    userRole === 'SHR' ?
    <div className={buttons}>
        {selectedItem !== '' && 
        <>
        <div className={selected}>
        Selected Event Request: {selectedItem}
        </div>
      <Link to="/recruitmentRequest" className={button} id={btnGreen}>Approve</Link>
      <Link to="/recruitmentRequest" className={button} id={btnRed}>Reject</Link>
      </>
      }</div> : <></>
    }
    <div className={gridContainer}>
      <div className={eventRequestList}>
      <div className={rejected}>
        Rejected
      </div>
      <div className={listContent}>
      {rejectedRequests.length !== 0 ?
        <RecruitmentRequestList recruitmentRequests={rejectedRequests} selectedItem={selectedItem} setSelectedItem={setSelectedItem} /> : <div>Empty list</div>}
      </div>
      </div>
      <div className={eventRequestList}>
      <div className={pending}>
        Pending
      </div>
      <div className={listContent}>
      {pendingRequests.length !== 0 ?
        <RecruitmentRequestList recruitmentRequests={pendingRequests} selectedItem={selectedItem} setSelectedItem={setSelectedItem} /> : <div>Empty list</div>}
      </div>
      </div>
      <div className={eventRequestList}>
      <div className={scsApproved}>
        Approved
      </div>
      <div className={listContent}>
      {ApprovedRequests.length !== 0 ?
        <RecruitmentRequestList recruitmentRequests={ApprovedRequests} selectedItem={selectedItem} setSelectedItem={setSelectedItem} /> : <div>Empty list</div>}
      </div>
      </div>
    </div>
    </div>
      </>
  )
}
