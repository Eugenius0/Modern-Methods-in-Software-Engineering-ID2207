import React, { useState } from 'react'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom';
import clientData from '../../mockData/eventRequestData.json';

export default function CreateEventRequest() {

    const { container, title, formContainer, label, input, button } = styles

    const [clientName, setClientName] = useState('')
    const [clientMail, setClientMail] = useState('')
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        clientName: '',
        clientMail: '',
      });

      const [clientData, setClientData] = useState<Client[]>([]);

      const handleSubmit = (e: any) => {
        e.preventDefault();

        const newEvent: Client = {
          clientName,
          clientMail,
        };

        setClientData([...clientData, newEvent]);
        navigate('/eventRequest');
      };

  return (
    <div className={container}>
    <div className={title}>
          Register Client
    </div>
    <div className={formContainer}>
        <form onSubmit={handleSubmit}>
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
            <label className={label}>Client Mail:</label>
            <input
              type="text"
              className={input}
              value={clientMail}
              onChange={(e) => setClientMail(e.target.value)}
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
