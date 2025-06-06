import "./FAQ.css";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaCheckCircle } from "react-icons/fa";


const faqData = [
  {
    question: "What are the admission requirements for your school?",
    answer: "Admission requirements vary based on the program. Please visit our admissions page for full details."
  },
  {
    question: "Do you offer financial aid or scholarships for students?",
    answer: "Yes, we offer financial aid and scholarships to eligible students. Our financial aid packages are based on financial need and academic merit. To apply, please fill out the appropriate forms on our website."
  },
  {
    question: "What extracurricular activities are available for students?",
    answer: "We offer a wide range of extracurricular activities including sports, music, drama, coding clubs, and more."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
           <div className="faq-data">
                     <div className="faq-left">
        <img
          src="https://img.freepik.com/free-photo/entrepreneurs-meeting-office_23-2148898688.jpg?ga=GA1.1.928172800.1748671466&semt=ais_items_boosted&w=740"
          alt="FAQ"
          className="faq-image"
        />
      </div>
      <div className="faq-right">
        <p className="faq-subtitle">OUR EDUCATION FAQ</p>
        <h2 className="faq-title">District Is Made Of About Students Childhood.</h2>
        <p className="faq-desc">
          Business tailored it design, management & support services business agency elit, sed do eiusmod tempor.
        </p>

        {faqData.map((item, index) => (
          <div
            className={`faq-item ${openIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <FaCheckCircle className="faq-icon" />
              <span>{item.question}</span>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openIndex === index && <div className="faq-answer">
                     <p>{item.answer}</p>
                    </div>}
          </div>
        ))}
      </div>
           </div>
    </div>
  );
};

export default FAQ;
