import React, { useState } from 'react';  // Thêm useState vào đây
import { useSelector, useDispatch } from 'react-redux';
import { deleteEvent } from './eventSlice';
import EventForm from './EventForm';
import '../App.css';

const EventList = () => {
  const events = useSelector((state) => state.events.events);
  const [isEditing, setIsEditing] = useState(false);
  const [eventToEdit, setEventToEdit] = useState(null);

  const dispatch = useDispatch();

  const handleEdit = (event) => {
    setIsEditing(true);
    setEventToEdit(event);
  };

  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEventToEdit(null);
  };

  return (
    <div>
      <h1>Event Management</h1>
      {isEditing ? (
        <EventForm eventToEdit={eventToEdit} onCancel={handleCancel} />
      ) : (
        <button onClick={() => setIsEditing(true)}>Add New Event</button>
      )}

      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <div>
              <strong>{event.name}</strong>
              <p>{event.date}</p>
              <p>{event.location}</p>
              <button onClick={() => handleEdit(event)}>Edit</button>
              <button onClick={() => handleDelete(event.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
