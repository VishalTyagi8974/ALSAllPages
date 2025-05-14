
import React from 'react';
import FadeImageSlider from '../../../components/animatedImages/FadeImageSlider';

const benefits = [
    {
        title: "Convenient & Time-Saving",
        description: "File anytime from anywhere—no need to visit tax offices or deal with paperwork.",
    },
    {
        title: "Secure & Error-Free",
        description: "Online portals offer encrypted, guided filing with auto-calculations and error detection.",
    },
    {
        title: "Faster Refunds",
        description: "Online filings are processed quicker, helping you get your tax refunds sooner.",
    },
    {
        title: "Easy Access to Records",
        description: "Your ITR history is safely stored and accessible for loans, visas, or future reference.",
    },
    {
        title: "Recognized Globally",
        description: "E-filed ITRs are accepted by banks and embassies, boosting your financial credibility.",
    },
];

const ITRBenefits = () => {
    return (
        <div className='py-5 w-100'>
            <section className='  mainContainer mx-auto'>
                <div className='bg-white pt-5 pb-4 px-4 px-md-5 rounded-4 ' style={{ borderTop: "7px solid #9966ff" }}>
                    <h2 className="mb-4 mb-md-5 mt-2 mt-lg-0  text-start text-lg-center display-7 secondMainColor fw-bold" style={{ padding: "0 30px" }}>
                        Leverage the Advantages of Filing ITR Online
                    </h2>
                    <div className="row">
                        <div className="col-12 col-lg-5 d-none d-xl-block mt-4 mx-auto" >

                            <FadeImageSlider images={["/itrPage/AnimateImage/img1.jpg", "/itrPage/AnimateImage/img2.jpg", "/itrPage/AnimateImage/img3.jpg"]} />
                        </div>



                        <div className='col-lg-7 mt-2'>
                            {benefits.map((benefit, index) => (
                                <div key={index}>

                                    <div className=" d-flex align-items-start " style={{ marginBottom: "32px" }}>
                                        <div>
                                            <h5 className=' '>
                                                <i className={`bi bi-${index + 1}-circle-fill mainColor me-2 `}></i>
                                            </h5>
                                        </div>
                                        <div>
                                            <h5 className="card-title text-dark fs-6 fw-semibold mb-2 " style={{ paddingTop: "3px" }}>
                                                {benefit.title}
                                            </h5>

                                            <p className="card-text para " style={{ fontSize: "0.95rem" }} >{benefit.description}</p>

                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ITRBenefits;




