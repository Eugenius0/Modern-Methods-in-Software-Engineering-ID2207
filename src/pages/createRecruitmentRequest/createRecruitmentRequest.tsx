import React, { useState } from 'react'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom';
import taskData from '../../mockData/taskData.json';

export default function CreateRecruitmentRequest() {

    const { container, pageTitle, formContainer, label, input, preferencesInput, pref, button } = styles

    const [id, setID] = useState(0)
    const [jobTitle, setJobTitle] = useState('')
    const [yearsOfExperience, setYearsOfExperience] = useState('')
    const [contractType, setContractType] = useState('')
    const [requestingDepartment, setRequestingDepartment] = useState('')
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        clientName: '',
      });

      const [recruitmentRequestData, setRecruitmentRequestData] = useState<RecruitmentRequest[]>([]);

      const handleSubmit = (e: any) => {
        e.preventDefault();

        const newRecruitmentRequest: RecruitmentRequest = {
            id: recruitmentRequestData.length + 1,
            contractType: '',
            requestingDepartment: '',
            yearsOfExperience: '',
            jobTitle: '',
            jobDescription: '',
            status: ''
        };

        setRecruitmentRequestData([...recruitmentRequestData, newRecruitmentRequest]);
        navigate('/eventRequest');
      };

    const [description, setDescription] = useState('')
    const handleDescriptionChange = (event: any) => {
      setDescription(event.target.value);
    };

  return (
    <div className={container}>
    <div className={pageTitle}>
          Recruitment Request
    </div>
    <div className={formContainer}>
        <form onSubmit={handleSubmit}>
        <div>
            <label className={label}>Contract Type:</label>
            <div>
                <input
                    type="radio"
                    name="contractType"
                    value="Full-Time"
                    checked={contractType === 'Full-Time'}
                    onChange={() => setContractType('Full-Time')}
                />
                <label>Full-Time</label>
            </div>
            <div>
                <input
                    type="radio"
                    name="contractType"
                    value="Part-Time"
                    checked={contractType === 'Part-Time'}
                    onChange={() => setContractType('Part-Time')}
                />
                <label>Part-Time</label>
            </div>
        </div>
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
            <label className={label}>Years of experience:</label>
            <input
              type="text"
              className={input}
              value={yearsOfExperience}
              onChange={(e) => setYearsOfExperience(e.target.value)}
            />
          </div>
          <div>
            <label className={label}>Job title:</label>
            <input
              type="text"
              className={input}
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          <div>
  <label className={label} id={pref}>Job description:</label>
  <textarea
        rows={4}         
        cols={50}
        className={preferencesInput}       
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Enter a description"
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
