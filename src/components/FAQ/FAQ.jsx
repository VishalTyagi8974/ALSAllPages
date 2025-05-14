import React, { useState, useRef } from 'react';
import './FAQ.css';

const FAQ = ({ faqData }) => {


    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="mb-5 w-100">
            <div className='mainContainer mx-auto '>
                <h2 className=" fw-semibold display-6 text-start py-2">Frequently asked questions</h2>
                {faqData.map((item, index) => (
                    <div key={index} className="faq-item ">
                        <div className="faq-question text-start" onClick={() => toggleAnswer(index)}>
                            <p className='fw-semibold  m-0'>{item.question}</p>
                            <span className='ms-3'>{openIndex === index ? <i className="bi bi-x"></i> : <i className="bi bi-plus"></i>}</span>
                        </div>
                        <div
                            className={`faq-answer-wrapper ${openIndex === index ? 'open' : ''}`}
                        >
                            <div className="faq-answer text-start">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))
                }
            </div >
        </section >
    );
};

export default FAQ;
