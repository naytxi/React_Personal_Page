import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });


  return(
    <>
    <h1>Contact</h1>
    <form /*onSubmit={handleSubmit}*/>
         <label>Name:</label>
       <input
         type="text"
         placeholder="name"
         value={formData.name}
         /*onChange={handleInputChange}*/
         name="name"
       />
        <label>Email:</label>
       <input
         type="email"
         placeholder="email"
         value={formData.email}
         /*onChange={handleInputChange}*/
         name="email"
       />
       <button type="submit">Enviar</button>
     </form>
    </>
  );

}











export default Contact;