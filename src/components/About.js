import React, { useState } from "react";
import "./About.css";

function About() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      question: "What does this website do?",
      answer:
        "This website helps developers generate commit messages for GitHub effortlessly. Whether you want something meaningful, humorous, or quick, it provides you with ready-to-use commit messages in just a few clicks.",
    },
    {
      question: "Why did you create this website?",
      answer:
        "As a developer, coming up with commit messages can sometimes feel repetitive or uncreative. This tool was created to save time and add a bit of fun to the process, while still keeping messages useful for version control.",
    },
    {
      question: "What are our future plans?",
      answer:
        "In the future, I aim to deploy this website and introduce custom features, like AI-generated commit messages tailored to your code changes, user profiles for saving message preferences, and integrations with platforms like GitHub or GitLab",
    },
  ];

  return (
    <div className="about-container">
      <h2 className="title">FAQs</h2>
      <div className="containU">
        <div className="accordion-container">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className={`accordion-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div
                className="accordion-header"
                onClick={() => handleToggle(index)}
              >
                <h3>{item.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
                </svg>
              </div>
              <div
                className={`accordion-content ${
                  activeIndex === index ? "open" : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
