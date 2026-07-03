import React from "react";
import { motion } from "framer-motion";

const sectionStyle = {
  marginTop: 32,
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 12,
  padding: "20px 24px",
  background: "rgba(255,255,255,0.03)",
};

const headingStyle = {
  fontSize: 20,
  color: "#00b4ff",
  marginBottom: 12,
};

const itemTextStyle = {
  color: "#bbb",
  fontSize: 14,
  lineHeight: 1.7,
};

const projects = [
  {
    title: "Employee Management System",
    stack: "React.js, JavaScript, HTML, CSS",
    date: "Aug 2025",
    points: [
      "Built a responsive Employee Management System using React.js and JavaScript, following modern frontend development practices.",
      "Implemented CRUD operations and state management to efficiently manage employee records and improve user experience.",
      "Used React Hooks, reusable components, and responsive design principles to improve performance, scalability, and maintainability.",
    ],
  },
  {
    title: "GoCart",
    stack: "React.js, Redux Toolkit, Tailwind CSS",
    date: "Nov 2025",
    points: [
      "Developed a multi-vendor e-commerce platform enabling sellers to register, manage products, and process customer orders through a unified marketplace.",
      "Built a responsive customer storefront with product browsing, shopping cart functionality, and advanced state management using Redux Toolkit.",
      "Implemented coupon management, ratings and reviews, store creation, order tracking, and API integration for seamless data flow.",
    ],
  },
  {
    title: "Personal Finance Tracker",
    stack: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
    date: "Jan 2026",
    points: [
      "Developed a full-stack MERN application using MongoDB, Express.js, React.js, and Node.js with secure JWT authentication and role-based access control.",
      "Designed and integrated REST APIs for income and expense tracking, custom categories, filtering, search functionality, and CSV export.",
      "Built scalable backend modules with MongoDB integration and optimized API performance for efficient data processing.",
      "Created an interactive analytics dashboard featuring spending insights, monthly trends, responsive design, and financial visualizations.",
    ],
  },
];

const skills = [
  "C",
  "C++",
  "Java",
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
  "React.js",
  "Redux Toolkit",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "REST API Development",
  "JWT Authentication",
  "MongoDB",
  "Git",
  "GitHub",
  "VS Code",
  "Data Structures and Algorithms",
  "OOP",
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "API Integration",
  "State Management",
  "Responsive Design",
];

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my education, projects, skills, and certifications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 26, color: "#00b4ff", marginBottom: 4 }}>
              SATYAM MAURYA
            </h3>
            <p style={{ margin: "8px 0", fontSize: 15, color: "#ccc" }}>
              B.Tech, Computer Science and Engineering
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              Lucknow, Uttar Pradesh
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              <a
                href="tel:+917897205855"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                +91-7897205855
              </a>{" "}
              |{" "}
              <a
                href="mailto:satyammaurya635635@gmail.com"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                satyammaurya635635@gmail.com
              </a>
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 560,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Profile:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              Computer Science and Engineering student focused on full stack web
              development, frontend engineering, backend development, API
              integration, state management, and responsive application design.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={sectionStyle}
        >
          <h4 style={headingStyle}>Education</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 18 }}>
              <strong>ABES Engineering College, AKTU University</strong>
              <br />
              <span style={{ color: "#00b4ff" }}>
                B.Tech., Computer Science and Engineering
              </span>
              <br />
              <span style={itemTextStyle}>
                Sep 2023 - Present | CGPA: 7.82 | Ghaziabad, India
              </span>
            </li>
            <li style={{ marginBottom: 18 }}>
              <strong>Kendriya Vidyalaya, CBSE Board</strong>
              <br />
              <span style={{ color: "#00b4ff" }}>
                Class XII, Science Stream
              </span>
              <br />
              <span style={itemTextStyle}>
                June 2023 | Percentage: 77% | Lucknow, India
              </span>
            </li>
            <li>
              <strong>Kendriya Vidyalaya, CBSE Board</strong>
              <br />
              <span style={{ color: "#00b4ff" }}>Class X</span>
              <br />
              <span style={itemTextStyle}>
                June 2021 | Percentage: 83% | Lucknow, India
              </span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={sectionStyle}
        >
          <h4 style={headingStyle}>Projects</h4>
          <div style={{ display: "grid", gap: 18 }}>
            {projects.map((project) => (
              <div key={project.title}>
                <strong style={{ color: "#e5e5e5" }}>{project.title}</strong>
                <br />
                <span style={{ color: "#00b4ff", fontSize: 14 }}>
                  {project.stack} | {project.date}
                </span>
                <ul style={{ marginTop: 8, paddingLeft: 20, ...itemTextStyle }}>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{ marginTop: 32 }}
        >
          <h4 style={headingStyle}>Technical Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "rgba(0,180,255,0.3)",
                }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={sectionStyle}
        >
          <h4 style={headingStyle}>Certifications</h4>
          <ul style={{ paddingLeft: 20, margin: 0, ...itemTextStyle }}>
            <li>Cisco Python Essentials 1 and Python Essentials 2</li>
            <li>GUVI x HCL Hackathon - Finalist Certificate</li>
            <li>L'Oreal Brainstorm 2026 - Certificate of Recognition</li>
            <li>Hack for Green Bharat Hackathon - Participation Certificate</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 18,
            marginTop: 36,
          }}
        >
          <motion.a
            href="https://github.com/satyammaurya999"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.08, color: "#00b4ff" }}
            style={{
              color: "#ccc",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://leetcode.com/u/satyammaurya23/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.08, color: "#00b4ff" }}
            style={{
              color: "#ccc",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            Leetcode
          </motion.a>
          <motion.a
            href="https://www.geeksforgeeks.org/profile/satyammaurtmg3"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.08, color: "#00b4ff" }}
            style={{
              color: "#ccc",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            GeeksForGeeks
          </motion.a>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            marginTop: 44,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/certs/SATYAM_MAURYA_resume.pdf"
            title="Satyam Maurya Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        <motion.a
          href="/certs/SATYAM_MAURYA_resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
