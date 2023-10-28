import React, { useState } from 'react'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom';
import taskData from '../../mockData/taskData.json';

export default function CreateFinancialRequest() {

    const { container, pageTitle, formContainer, label, input, preferencesInput, pref, button } = styles

    const [id, setID] = useState(0)
    const [projectReference, setProjectReference] = useState('')
    const [requestingDepartment, setRequestingDepartment] = useState('')
    const [requiredAmount, setRequiredAmount] = useState('')
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        clientName: '',
      });

      const [financialRequestData, setFinancialRequestData] = useState<FinancialRequest[]>([]);

      const handleSubmit = (e: any) => {
        e.preventDefault();

        const newFinancialRequest: FinancialRequest = {
            id: financialRequestData.length + 1,
            requestingDepartment: '',
            projectReference: 0,
            requiredAmount: '',
            Reason: '',
            status: ''
        };

        setFinancialRequestData([...financialRequestData, newFinancialRequest]);
        navigate('/eventRequest');
      };

      const [reason, setReason] = useState('')
    const handleReasonChange = (event: any) => {
      setReason(event.target.value);
    };

  return (
    <div className={container}>
    <div className={pageTitle}>
          Financial Request
    </div>
    <div className={formContainer}>
        <form onSubmit={handleSubmit}>
        <div>
            <label className={label}>Requesting department:</label>
            <div>
                <input
                    type="radio"
                    name="requestingDepartment"
                    value="Administration"
                    checked={requestingDepartment === 'Administration'}
                    onChange={() => setRequestingDepartment('Administration')}
                />
                <label>Administration</label>
            </div>
            <div>
                <input
                    type="radio"
                    name="requestingDepartment"
                    value="Production"
                    checked={requestingDepartment === 'Production'}
                    onChange={() => setRequestingDepartment('Production')}
                />
                <label>Production</label>
            </div>
            <div>
                <input
                    type="radio"
                    name="requestingDepartment"
                    value="Services"
                    checked={requestingDepartment === 'Services'}
                    onChange={() => setRequestingDepartment('Services')}
                />
                <label>Services</label>
            </div>
            <div>
                <input
                    type="radio"
                    name="requestingDepartment"
                    value="Financial"
                    checked={requestingDepartment === 'Financial'}
                    onChange={() => setRequestingDepartment('Financial')}
                />
                <label>Financial</label>
            </div>
        </div>
        <div>
            <label className={label}>Project reference:</label>
            <input
              type="text"
              className={input}
              value={projectReference}
              onChange={(e) => setProjectReference(e.target.value)}
            />
          </div>
          <div>
            <label className={label}>Required amount:</label>
            <input
              type="text"
              className={input}
              value={requiredAmount}
              onChange={(e) => setRequiredAmount(e.target.value)}
            />
          </div>
          <div>
  <label className={label} id={pref}>Reason:</label>
  <textarea
        rows={4}         
        cols={50}
        className={preferencesInput}       
        value={reason}
        onChange={handleReasonChange}
        placeholder="Enter a reason"
      />
        </div>
    <div>
            <button className={button} type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
