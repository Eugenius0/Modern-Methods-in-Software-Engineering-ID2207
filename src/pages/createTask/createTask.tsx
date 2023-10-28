import React, { useState } from 'react'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom';
import taskData from '../../mockData/taskData.json';

export default function CreateTask() {

    const { container, pageTitle, formContainer, label, input, preferencesInput, pref, button, submitButton } = styles

    const [referenceID, setReferenceID] = useState(0)
    const [title, setTitle] = useState('')
    const [subTeam, setSubTeam] = useState('')
    const [assignedTo, setAssignedTo] = useState('')
    const [priority, setPriority] = useState('')
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        clientName: '',
      });

      const [taskData, setTaskData] = useState<Task[]>([]);

      const handleSubmit = (e: any) => {
        e.preventDefault();

        const newTask: Task = {
            id: taskData.length + 1,
            referenceID,
            subTeam,
            title,
            description,
            assignedTo,
            priority,
            status: '',
            comment: ''
        };

        setTaskData([...taskData, newTask]);
        navigate('/eventRequest');
      };

    const [description, setDescription] = useState('')
    const handleDescriptionChange = (event: any) => {
      setDescription(event.target.value);
    };

  return (
    <div className={container}>
    <div className={pageTitle}>
          Create Task
    </div>
    <div className={formContainer}>
        <form onSubmit={handleSubmit}>
          <div>
            <label className={label}>Project Reference:</label>
            <input
              type="text"
              className={input}
              value={referenceID}
              onChange={(e) => setReferenceID(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label className={label}>Title:</label>
            <input
              type="text"
              className={input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
  <label className={label} id={pref}>Description:</label>
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
  <label className={label}>Assign to:</label>
  <select
    className={input}
    value={assignedTo}
    onChange={(e) => setAssignedTo(e.target.value)}
  >
    <option value="Mary">Mary</option>
    <option value="Angelina">Angelina</option>
    <option value="Emily">Emily</option>
  </select>
    </div>
    <div>
    <label className={label}>Priority:</label>
    <select
        className={input}
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
    >
    <option value="High">High</option>
    <option value="Medium">Medium</option>
    <option value="Low">Low</option>
  </select>
    </div>
    <div>
            <button className={button} type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
