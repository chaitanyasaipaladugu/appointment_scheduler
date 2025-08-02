import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAppointment } from "../features/appointments/appointmentSlice";

export default function List({ setEditData }) {
  const appointments = useSelector((state) => state.appointments.list);
  const dispatch = useDispatch();

  const today = new Date().toISOString().split("T")[0];
  const upcoming = appointments.filter((app) => app.date >= today);

  return (
    <div>
      <h3>Upcoming Appointments</h3>
      {upcoming.length === 0 ? (
        <p>No appointments scheduled.</p>
      ) : (
        <ul>
          {upcoming.map((app) => (
            <li key={app.id}>
              {app.name} – {app.date}
              <button onClick={() => setEditData(app)}>Edit</button>
              <button onClick={() => dispatch(deleteAppointment(app.id))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
