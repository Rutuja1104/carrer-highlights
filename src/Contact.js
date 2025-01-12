// ContactForm.js
import React, { useState } from "react";
import "./Contact.css";
import Heading from "./Heading";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Message Sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="text-white">
      <Heading tittle={"Contact"} />
      <div className="contact-container">
        <h2
          style={{
            textShadow: "1px 1px 2px yellow, 0 0 1em pink, 0 0 0.2em pink",
          }}
        >
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="contact-form mt-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
