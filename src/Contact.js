import React, { useState } from "react";
import "./Contact.css";
import Heading from './Heading'

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
        // You can replace this alert with actual email service integration (e.g., EmailJS)
        alert(`Thank you, ${formData.name}! Your message has been sent.`);
        setFormData({ name: "", email: "", message: "" });
      };

  return (
    <div className="text-white m-4 mt-5">
      <Heading tittle={"Contact"} />
        <div className='mt-5'>
            <div style={{width:"100%"}}>
            <img style={{width:"100%", height:"50%"}}src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm9tY2F5dGZxNDhtOGh4cjR1aWZmd2d3azVkemNucHoyN2ZwYTg4cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ko7twHhomhk8E/giphy.webp'/>
            </div>
            <div>
 <p>I’d love to hear from you! Fill out the form below to get in touch.</p>
      {/* <form onSubmit={handleSubmit}>
        <div className="form-group d-flex ">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form> */}
            </div>
        </div>

        </div> 
  )
}

export default Contact