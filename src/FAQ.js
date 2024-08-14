import React from 'react';
import './FAQ.css'; 


const faqData = [
  {
    question: "How can I track my order?",
    answer: "You can track your order by clicking on the 'Track Order' button and entering your order number."
  },
  {
    question: "What is the return policy?",
    answer: "You can return most items within 30 days of purchase. Please check our return policy for more details."
  },
  {
    question: "How do I contact customer support?",
    answer: "You can contact our customer support via the 'Customer Care' option or by calling our hotline."
  },
  {
    question: "Can I change my delivery address?",
    answer: "Yes, you can change your delivery address before the order is shipped by contacting customer support."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods, including credit/debit cards, PayPal, and bank transfers."
  }
];

const FAQ = () => {
  return (
    <div className="faq-container">
      <h2 className="faq-header">Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqData.map((faq, index) => (
          <li key={index} className="faq-item">
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
