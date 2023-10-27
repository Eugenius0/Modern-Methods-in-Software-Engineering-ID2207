import React, { useState } from 'react'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom';
import eventRequestData from '../../mockData/eventRequestData.json';

export default function CreateEventRequest() {

    const { container, title, formContainer, label, input, button } = styles

    const [recordNumber, setRecordNumber] = useState('')
    const [clientName, setClientName] = useState('')
    const [eventType, setEventType] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [attendees, setAttendees] = useState('')
    const [preferences, setPreferences] = useState([''])
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

      const handlePreferencesChange = (e: any) => {
        const { value, checked } = e.target;
      
        setPreferences((prevPreferences) => {
          if (checked) {
            return [...prevPreferences, value];
          } else {
            return prevPreferences.filter((pref) => pref !== value);
          }
        });
      };

  return (
    <div className={container}>
    <div className={title}>
          Create Event Request
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
  <label className={label}>Preferences:</label>
  <div>
    <input
      type="checkbox"
      id="option1"
      name="option1"
      value="Option 1"
      checked={preferences.includes('Option 1')}
      onChange={handlePreferencesChange}
    />
    <label htmlFor="option1">Option 1</label>
  </div>
  <div>
    <input
      type="checkbox"
      id="option2"
      name="option2"
      value="Option 2"
      checked={preferences.includes('Option 2')}
      onChange={handlePreferencesChange}
    />
    <label htmlFor="option2">Option 2</label>
  </div>
  <div>
    <input
      type="checkbox"
      id="option3"
      name="option3"
      value="Option 3"
      checked={preferences.includes('Option 3')}
      onChange={handlePreferencesChange}
    />
    <label htmlFor="option3">Option 3</label>
  </div>
  <div>
    <input
      type="checkbox"
      id="option4"
      name="option4"
      value="Option 4"
      checked={preferences.includes('Option 4')}
      onChange={handlePreferencesChange}
    />
    <label htmlFor="option4">Option 4</label>
  </div>
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
