import React from "react";
import { motion } from "framer-motion";
import "../CSS/Home.css";
import "../index.css";

export default function Home() {
  // Image paths for public folder assets
  const photo = "/satyam-profile.png";
  const githubLogo = "/github.png";
  const linkedinLogo = "/linkedin.png";
  const gmailLogo = "/gmail.png";
  const whatsappLogo = "/whatsapp.png";
  const instagramLogo = "/insta.png";

  const professions = [
    "MERN Stack Developer",
    "Full Stack Engineer",
    "Backend Developer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  const quickLinks = [
    {
      img: githubLogo,
      title: "GitHub",
      link: "https://github.com/satyammaurya999",
    },
    {
      img: linkedinLogo,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/satyam-maurya-448b95288/",
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
    <section className="home-section">
      {/* Typing Effect Styles */}
      <style>
        {`
          @keyframes typing { from { width: 0; } to { width: 100%; } }
          @keyframes blink { 50% { border-color: transparent; } }
        `}
      </style>

      {/* Top Section: Photo + Info */}
      <div className="home-top">
        {/* Left: Glowing Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="photo-ring"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="photo-frame"
          >
            <motion.img
              src={photo}
              alt="Satyam Maurya"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="profile-photo"
            />
          </motion.div>
        </motion.div>

        {/* Right: Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1 className="home-title">
            Hi, I'm{" "}
            <motion.span
              animate={{ backgroundPositionX: ["0%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="home-name"
            >
              Satyam Maurya
            </motion.span>
          </h1>

          {/* Typing Animated Text */}
          <p className="typing-effect">
            MERN Stack Developer | Backend Engineer | Problem Solver
          </p>

          {/* Profession Tags */}
          <motion.div className="profession-tags">
            {professions.map((role, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  background:
                    "linear-gradient(90deg,var(--accent),var(--accent-2))",
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="profession-tag"
              >
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* Info Cards */}
          <motion.div className="info-cards">
            {[
              { label: "📍 Location", value: "Ghaziabad, India" },
              { label: "💼 Expertise", value: "MERN Stack, Backend Dev" },
              { label: "📧 Contact", value: "satyammaurya635635@gmail.com" },
            ].map((info, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="info-card"
              >
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Freelance Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{
              marginTop: "2rem",
              padding: "1.5rem",
              background:
                "linear-gradient(135deg, rgba(0,180,255,0.1), rgba(0,255,200,0.1))",
              borderRadius: "12px",
              border: "1px solid rgba(0,180,255,0.3)",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: "var(--accent)",
                fontSize: "1.3rem",
                marginBottom: "0.8rem",
                fontWeight: "600",
              }}
            >
              🚀 Freelance Web Developer
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "1rem",
                lineHeight: "1.6",
              }}
            >
              Successfully delivered <strong>2+ websites</strong> to clients at
              genuine & affordable costs.
              <br />
              Offering end-to-end development with{" "}
              <strong>maintenance support</strong> by me.
            </p>
            <p
              style={{
                color: "var(--accent-2)",
                fontSize: "0.95rem",
                marginTop: "0.5rem",
                fontStyle: "italic",
              }}
            >
              Quality work • Timely delivery • Ongoing maintenance
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Quick Links */}
      <motion.div className="quick-links">
        <h2 className="quick-links-title">Connect with me</h2>
        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{
                  filter: "drop-shadow(0 0 15px var(--accent)) brightness(1.2)",
                }}
                className="quick-link-img"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
