import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';

const Reserve = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
    email: ""
  });

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });

    if (name === "name" && value.length < 3) {
      setMessage("Name must be at least 3 characters");
      setBtnDisabled(true);
    } else {
      setMessage("");
      setBtnDisabled(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("reserveData", JSON.stringify(formData));

    navigate("/");
  };

  return (
    <div className="page-container">
      <h1>Reserve a Table</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          name="name"
        />

        <label>Date:</label>
        <input
          type="date"
          value={formData.date}
          onChange={handleInputChange}
          name="date"
        />

        <label>Time:</label>
        <input
          type="time"
          value={formData.time}
          onChange={handleInputChange}
          name="time"
        />

        <label>Guests:</label>
        <input
          type="number"
          min="1"
          value={formData.guests}
          onChange={handleInputChange}
          name="guests"
        />

        <label>Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          name="email"
        />

        <button type="submit" disabled={btnDisabled}>Enviar</button>
        <p>{message}</p>
      </form>
    </div>
  );
};

export default Reserve;
