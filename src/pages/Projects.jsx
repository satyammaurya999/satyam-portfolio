import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Personal Finance Tracker",
    desc: "A full-stack MERN application for tracking income and expenses with secure JWT authentication, analytics dashboard, custom categories, filtering, search, and CSV export.",
    ss: "/certs/expensetracker.png",
    tech: ["React.js"," Node.js " , "Express.js", " MongoDB","JWT", " Tailwind CSS"],
    live: "https://expensetracker.codesatyam.in/",
    code: "https://github.com/satyammaurya999/EXPENSE-TRACKER-APP",
  },
  {
    title: "🛒 GoCart",
    desc: "A multi-vendor e-commerce platform where sellers can manage products and customers can browse, shop, review products, and track orders with a responsive user interface.",
    ss: "/certs/Gocart.png",
    tech: ["React.js", "Redux" ,"Toolkit" ,"Tailwind CSS" ,"REST API"],
    live: "https://alpha-gym-sage.vercel.app/",
    code: "https://github.com/satyammaurya999/gocart-main",
  },
  {
    title: "CHATLY",
    desc: "Real-time chat application handling 100+ concurrent users and 10k+ messages/day. Built with WebSocket (Socket.IO) for 90% faster message transmission.",
    ss: "/gallery/{DB413633-DD5D-4894-A5D9-59759D26D425}.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT"],
    live: "https://chat.codesatyam.in/",
    code: "https://github.com/satyammaurya999/chatting-app",
  },
  {
    title: "🤖 AI Interview Simulator",
    desc: "An AI-powered Interview Simulator developed as a college hackathon project, enabling users to practice role-based interviews with AI-generated questions and real-time interaction for interview preparation.",
    ss: "/certs/aiphoto.png",
    tech: ["React.js","JavaScript" , "Node.js ", "Express.js ", "Tailwind CSS "," Hugging Face API ","JSON ","Streamlit"],
    live: "https://ai-interviewer-pi-five.vercel.app/", // TODO: Add your live demo URL
    code: "https://github.com/satyammaurya999/ai-interviewer",
  },
];

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div
        className="card"
        style={{
          background: "rgba(255,255,255,0.03)",
          borderRadius: 16,
          padding: 30,
        }}
      >
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works 
        </p>

        <div
          className="projects-grid"
          style={{
            display: "grid",
            gap: 24,
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background:
                  "linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))",
                border: "1px solid rgba(0,255,255,0.1)",
                borderRadius: 16,
                padding: 16,
                overflow: "hidden",
                boxShadow: "0 0 20px rgba(0,255,255,0.08)",
              }}
            >
              <motion.div
                className="ss"
                whileHover={{ scale: 1.05 }}
                style={{
                  width: "100%",
                  aspectRatio: "16 / 9",
                  borderRadius: 12,
                  overflow: "hidden",
                  background:
                    "linear-gradient(145deg, rgba(5,10,18,0.95), rgba(0,0,0,0.95))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                    borderRadius: 12,
                    display: "block",
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: "#0ea5e9", marginBottom: 6 }}>
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#bbb",
                    marginBottom: 8,
                    lineHeight: 1.6,
                  }}
                >
                  {p.desc}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    marginBottom: 10,
                  }}
                >
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: "rgba(0,255,255,0.05)",
                        border: "1px solid rgba(0,255,255,0.1)",
                        padding: "3px 8px",
                        borderRadius: 6,
                        fontSize: 12,
                        color: "#aaf",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 10,
                  }}
                >
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      background: "rgba(255,255,255,0.05)",
                      color: "#0ea5e9",
                      padding: "6px 12px",
                      borderRadius: 8,
                      fontSize: 13,
                      border: "1px solid rgba(0,255,255,0.1)",
                      textDecoration: "none",
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      background: "linear-gradient(90deg, #06b6d4, #0891b2)",
                      color: "#fff",
                      padding: "6px 12px",
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: "none",
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
