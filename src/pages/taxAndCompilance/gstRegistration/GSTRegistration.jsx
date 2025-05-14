import React from 'react'
import UserFormPage from '../../../components/userForm/UserFormPage'
import "./GSTRegistration.css"
import FocusButton from '../../../components/focusButtons/FocusButton'
import WhyGSTRegistration from './WhyGSTRegistration'
import GSTDocuments from './GSTDocuments'
import FAQ from '../../../components/FAQ/FAQ'
import WhyALS from './WhyALS'

const GSTRegistration = () => {
    return (
        <div className='w-100 d-flex justify-content-center flex-wrap'>
            <div className='HeroGSTRegistrationSection'></div>
            <section className="position-relative my-3 my-md-4  " >

                <div className=" text-start  position-relative mx-auto py-2 z-1 row  mainContainer" >
                    <div className=' col-lg-6 col-xl-7 px-0'>
                        <h1 className="thirdMainColor display-1 fw-bold  mb-4 mb-sm-3 ">
                            Power Your Business Growth with GST Registration
                        </h1>
                        <p className="para  mt-3 mb-4" style={{ fontSize: "1.1rem" }}>
                            GST registration is mandatory for businesses in India once they cross the turnover threshold. It allows you to collect taxes legally, claim input tax credit, and expand your business with trust and compliance.</p>
                        <FocusButton focusElementId={"focusGenericForm"} buttonText={<>Starts at  &#x20b9;889</>} />
                    </div>


                    <div className=' col-lg-6 col-xl-5 px-0 '>
                        <div id="focusGenericForm" tabIndex="0" className='glowingElement mx-0 mx-md-4 rounded-4'> <UserFormPage selectedOption={"GST Registration"} isFixed={true} /></div>
                    </div>
                </div >
            </section >
            <div className='bg-white w-100 '>
                <WhyGSTRegistration />
            </div>
            <GSTDocuments />
            <WhyALS />
            <FAQ faqData={[
                {
                    question: "Who needs to register for GST?",
                    answer: "Any business with an annual turnover exceeding the prescribed threshold (Rs. 20 lakh for services or Rs. 40 lakh for goods in most states) must register under GST."
                },
                {
                    question: "What are the benefits of GST registration?",
                    answer: "GST registration allows businesses to legally collect tax, claim input tax credit, and expand their operations across India with ease and compliance."
                },
                {
                    question: "Can I have more than one GST registration?",
                    answer: "Yes, if you operate in more than one state or have multiple verticals of business, you must obtain separate GST registrations for each."
                },
                {
                    question: "What is the penalty for not registering under GST?",
                    answer: "Failure to register under GST may lead to a penalty of 10% of the tax amount due or Rs. 10,000—whichever is higher."
                },
                {
                    question: "Is GST registration free of cost?",
                    answer: "Yes, registering for GST on the government portal is free. However, you may incur professional service charges if you take expert assistance."
                }
            ]} />


        </div >
    )
}

export default GSTRegistration;