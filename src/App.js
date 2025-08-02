import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [editData, setEditData] = useState(null);

  return (
    <div style={{ padding: 20 }}>
      <h1>📅 Appointment Scheduler</h1>
      <Form editData={editData} setEditData={setEditData} />
      <List setEditData={setEditData} />
    </div>
  );
}
