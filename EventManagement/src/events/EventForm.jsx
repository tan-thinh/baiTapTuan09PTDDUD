import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEvent, editEvent } from './eventSlice';
import '../App.css';  // Import the CSS file

const EventForm = ({ eventToEdit, onCancel }) => {
  const [name, setName] = useState(eventToEdit ? eventToEdit.name : '');
  const [date, setDate] = useState(eventToEdit ? eventToEdit.date : '');
  const [location, setLocation] = useState(eventToEdit ? eventToEdit.location : '');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!name || !date || !location) {
      setError('All fields are required.');
      return;
    }

    const newEvent = { name, date, location };
    if (eventToEdit) {
      dispatch(editEvent({ id: eventToEdit.id, updatedEvent: newEvent }));
    } else {
      dispatch(addEvent(newEvent));
    }

    setName('');
    setDate('');
    setLocation('');
    setError('');
    onCancel();
  };

  return (
    <div className="form-container">
      <h2>{eventToEdit ? 'Edit Event' : 'Add New Event'}</h2>
      <form onSubmit={handleSubmit} className="event-form">
        {error && <p className="error-message">{error}</p>}
        
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Event Name"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Event Location"
          required
        />
        <input
          type="submit"
          value={eventToEdit ? "Update Event" : "Add Event"}
          disabled={!name || !date || !location}
        />
        <input type="button" value="Cancel" onClick={onCancel} />
      </form>
    </div>
  );
};

export default EventForm;
