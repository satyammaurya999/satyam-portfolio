import React, { useState } from "react";
import { motion } from "framer-motion";

import "../CSS/Contact.css";
import "../index.css";

export default function Contact() {
  // Image paths for public folder assets
  const githubLogo = "/github.png";
  const linkedinLogo = "/linkedin.png";
  const gmailLogo = "/gmail.png";
  const whatsappLogo = "/whatsapp.png";
  const instagramLogo = "/insta.png";

  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.subject || !form.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `Hello! My name is ${form.name}

${form.contact ? `Contact: ${form.contact}` : ""}

Subject: ${form.subject}

Message: ${form.message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Your WhatsApp number
    const whatsappNumber = "917897205855";

    // Open WhatsApp with pre-filled message
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );

    setStatus("✅ Opening WhatsApp...");
    setForm({ name: "", contact: "", subject: "", message: "" });
  };

  const quickLinks = [
    {
      img: githubLogo,
      title: "GitHub",
      link: "https://github.com/satyammaurya999",
    },
    {
      img: linkedinLogo,
      title: "LinkedIn",
      link: "www.linkedin.com/in/satyam-maurya-448b95288",
    },
    {
      img: gmailLogo,
      title: "Email",
      link: "mailto:satyammaurya635635@gmail.com",
    },
    {
      img: whatsappLogo,
      title: "WhatsApp",
      link: "https://wa.me/+917897205855",
    },
    {
      img: instagramLogo,
      title: "Instagram",
      link: "https://www.instagram.com/satyam.tz/",
    },
  ];

  return (
    <section className="contact-section">
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="contact-title"
      >
        Let’s Connect & Collaborate 🤝
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="contact-subtitle"
      >
        Whether it’s a new project, a collaboration, or just to say hi — I’d
        love to hear from you!
      </motion.p>

      {/* Quick Links */}
      <motion.div className="contact-links">
        {quickLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="social-icon"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        className="contact-form"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Your Email or Phone"
          value={form.contact}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message..."
          value={form.message}
          onChange={handleChange}
          rows="5"
          required
        />
        <motion.button
          type="submit"
          className="contact-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📱 Contact on WhatsApp
        </motion.button>

        {status && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="contact-status"
          >
            {status}
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}
