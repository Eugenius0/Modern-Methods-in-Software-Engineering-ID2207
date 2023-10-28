import React, { useState } from 'react'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom';
import eventRequestData from '../../mockData/eventRequestData.json';

export default function EventRequestDetails() {

    const { container, title, formContainer, label, input, preferencesInput, pref, button, submitButton } = styles

    const [recordNumber, setRecordNumber] = useState('')
    const [clientName, setClientName] = useState('')
    const [eventType, setEventType] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [attendees, setAttendees] = useState('')
    const [budget, setBudget] = useState('')
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        clientName: '',
        eventType: '',
        startDate: '',
        endDate: '',
        expectedAttendees: '',
        preferences: [],
        expectedBudget: '',
      });

      const [eventData, setEventData] = useState<EventRequest[]>([]);

      const handleSubmit = (e: any) => {
        e.preventDefault();

        const newEvent: EventRequest = {
          id: eventRequestData.length + 1,
          clientName,
          eventType,
          status: 'pending',
          startDate,
          endDate,
          expectedAttendees: Number(attendees),
          preferences,
          expectedBudget: Number(budget),
        };

        setEventData([...eventData, newEvent]);
        navigate('/eventRequest');
      };

    const [preferences, setPreferences] = useState([''])
    const handlePreferencesChange = (event: any) => {
      setPreferences(event.target.value);
    };

  return (
    <div className={container}>
    <div className={title}>
          Event Request Details
    </div>
    <div className={formContainer}>
        <form onSubmit={handleSubmit}>
          <div>
            <label className={label}>Record Number:</label>
            <input
              type="text"
              className={input}
              value={recordNumber}
              onChange={(e) => setRecordNumber(e.target.value)}
            />
          </div>
          <div>
            <label className={label}>Client Name:</label>
            <input
              type="text"
              className={input}
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </div>
          <div>
            <label className={label}>Event Type:</label>
            <input
              type="text"
              className={input}
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
            />
          </div>
          <div>
            <label className={label}>Start Date:</label>
            <input
              type="date"
              className={input}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <label className={label}>End Date:</label>
            <input
              type="date"
              className={input}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div>
            <label className={label}>Expected Number of Attendees:</label>
            <input
              type="text"
              className={input}
              value={attendees}
              onChange={(e) => setAttendees(e.target.value)}
            />
          </div>
          <div>
  <label className={label} id={pref}>Preferences:</label>
  <textarea
        rows={4}         
        cols={50}
        className={preferencesInput}       
        value={preferences}
        onChange={handlePreferencesChange}
        placeholder="Enter the preferences"
      />
        </div>
          <div>
            <label className={label}>Expected Budget:</label>
            <input
              type="text"
              className={input}
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
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
