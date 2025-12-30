import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import "./Contact.scss";
import SectionTitle from "../components/Section-title";
import PrimaryButton from "../components/Primary-button";
import EmailIcon from "../assets/email-icon.svg";
import PhoneIcon from "../assets/phone-icon.svg";
import LocationIcon from "../assets/location-icon.svg";

const TypeBox = ({ title, placeholder, value, onChange, name, error, type = "text" }) => {
  return (
    <div className="TypeBoxContainer">
      <label>{title}</label>
      {type === "textarea" ? (
        <textarea
          className={`TypeBox ${error ? "error" : ""}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          rows={6}
        />
      ) : (
        <input
          type={type}
          className={`TypeBox ${error ? "error" : ""}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
      )}
    </div>
  );
};

const ContactInfoBox = ({ icon, title, description }) => {
  return (
    <div className="ContactInfoBox">
      <div className="ContactInfoBoxIcon">
        <img src={icon} alt={title} style={{ width: "24px", height: "24px" }} />
      </div>
      <div className="ContactInfoBoxTexts">
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSend = (e) => {
    e.preventDefault();

    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) newErrors[key] = true;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const now = new Date();
    const timeSent = now.toLocaleString();

    emailjs
      .send(
        "service_vgkltlc",
        "template_ywqfdch",
        {
          title: formData.subject,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: timeSent,
        },
        "RhFkK6T8Httcf5yVX"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="ContactPageContainer">
      <div className="ContactPageTopic">
        <span>Get In Touch</span>
        <span>
          Have a project in mind or just want to say hello? I'd love to hear from you. Let's create something amazing together.
        </span>
      </div>

      {/* Section title for sending message */}
      <SectionTitle title="SEND A MESSAGE" />

      {/* Desktop row layout */}
      <div className="ContactContainer">
        {/* Left Column: Contact Info */}
        <div className="ContactInfoContainer">
          {/* CONTACT INFO section title only visible on tablet/mobile */}
          <div className="desktop-hide">
            <SectionTitle title="CONTACT INFO" />
          </div>

          <div className="ContactInfoBoxGrid">
            <ContactInfoBox
              icon={EmailIcon}
              title="EMAIL"
              description="nexgen.d.pahari@gmail.com"
            />
            <ContactInfoBox
              icon={PhoneIcon}
              title="PHONE"
              description="+977 9182312412414"
            />
            <ContactInfoBox
              icon={LocationIcon}
              title="LOCATION"
              description="Bashundhara, Kathmandu, Nepal"
            />
          </div>
          <div className="AvailableContainerContainer"><div className="AvailableContainer">
            <p>AVAILABILITY</p>
            <p>
              I am available for freelance work as well as full-time positions and usually respond within 24 hours.
            </p>
          </div></div>
          
        </div>

        {/* Right Column: Send Message Box */}
        <div className="SendMessageBox">
          <form onSubmit={handleSend} className="SendMessage" style={{ width: "100%" }}>
            <TypeBox
              title="YOUR NAME"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              name="name"
              error={errors.name}
            />
            <TypeBox
              title="YOUR EMAIL"
              placeholder="John@gmail.com"
              value={formData.email}
              onChange={handleChange}
              name="email"
              type="email"
              error={errors.email}
            />
            <TypeBox
              title="SUBJECT"
              placeholder="General Inquiry"
              value={formData.subject}
              onChange={handleChange}
              name="subject"
              error={errors.subject}
            />
            <TypeBox
              title="MESSAGE"
              placeholder="Enter your message here..."
              value={formData.message}
              onChange={handleChange}
              name="message"
              type="textarea"
              error={errors.message}
            />
          </form>
          <PrimaryButton
            text="SEND MESSAGE"
            type="submit"
            style={{ width: "230px", marginTop: "16px" }}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
