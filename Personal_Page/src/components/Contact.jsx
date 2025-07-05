import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

    localStorage.setItem("contactData", JSON.stringify(formData));

    navigate("/");
  };

  return (
    <>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="name"
          value={formData.name}
          onChange={handleInputChange}
          name="name"
        />
        <label>Email:</label>
        <input
          type="email"
          placeholder="email"
          value={formData.email}
          onChange={handleInputChange}
          name="email"
        />
        <button type="submit" disabled={btnDisabled}>Enviar</button>
        <p>{message}</p>
      </form>
    </>
  );
};

export default Contact;
