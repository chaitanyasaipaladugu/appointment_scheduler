import React from "react";
import { useDispatch } from "react-redux";
import {
  addAppointment,
  editAppointment,
} from "../features/appointments/appointmentSlice";
import { useState, useEffect } from "react";
export function Form({ editData, setEditData }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (editData) {
      setName(editData.name);
      setDate(editData.date);
    }
  }, [editData]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date) return;
    if (editData) {
      dispatch(editAppointment({ id: editData.id, name, date }));
      setEditData(null);
    } else {
      dispatch(addAppointment({ name, date }));
    }
  };
}
