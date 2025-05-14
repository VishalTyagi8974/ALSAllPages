import React from 'react'
import "./ITRFiling.css"
import UserFormPage from '../../../components/userForm/UserFormPage'
import Importance from './Importance'
import ITRBenefits from './ITRBenifits'
import FAQ from '../../../components/FAQ/FAQ'
import ALSImp from './ALSImp'

import FocusButton from "../../../components/focusButtons/FocusButton"

const ITRFiling = () => {
  return (

    <div className='w-100 d-flex justify-content-center flex-wrap'>
      <div className='HeroSection'></div>
      <section className="position-relative my-3 my-md-4  " >

        <div className=" text-start  position-relative mx-auto py-2 z-1 row  mainContainer" >
          <div className=' col-lg-6 col-xl-7 px-0'>
            <h1 className="secondMainColor display-1 fw-bold  mb-3  ">
              File Your <br /> Income Tax Return the Smarter Way
            </h1>
            <p className="para  mt-2 mb-4 " style={{ fontSize: "1.1rem" }}>
              Take the hassle out of tax season. File your ITR online in minutes with our simple, secure, and user-friendly platform. Whether you're salaried, self-employed, or a freelancer — we've got you covered with step-by-step guidance and expert support.
            </p>
            <FocusButton focusElementId={"focusGenericForm"} buttonText={<>Starts at  &#x20b9;449</>} />
          </div>
          <div className=' col-lg-6 col-xl-5 px-0 '>
            <div id="focusGenericForm" tabIndex="0" className='glowingElement mx-0 mx-md-4 rounded-4'><UserFormPage selectedOption={"ITR Filing"} isFixed={true} /></div>
          </div>
        </div>
      </section >
      {/* <ITRWithALS /> */}
      < ALSImp />

      <ITRBenefits />

      <Importance />

      <FAQ faqData={[
        {
          "question": "Can I file ITR without Form 16?",
          "answer": "Yes, you can file your ITR without Form 16 by using your salary slips, bank statements, and Form 26AS to gather income details and calculate taxes paid."
        },
        {
          "question": "Is it mandatory to link Aadhaar with PAN for ITR filing?",
          "answer": "Yes, linking Aadhaar with PAN is mandatory for filing ITR in India. Without this link, your ITR may be considered invalid or not processed."
        },
        {
          "question": "What happens if I miss the ITR filing deadline?",
          "answer": "If you miss the deadline, you may face penalties, interest on taxes due, and you might not be able to carry forward certain losses. However, you can still file a belated return before the end of the assessment year."
        },
        {
          "question": "Can I revise my ITR after filing?",
          "answer": "Yes, if you discover any mistake after filing your ITR, you can revise it before the deadline for revised returns, which is generally December 31 of the assessment year."
        },
        {
          "question": "How do I check my ITR status after filing?",
          "answer": "You can check your ITR status by logging into the Income Tax e-Filing portal, going to 'View Returns/Forms', and selecting the relevant assessment year to see the filing and verification status."
        }
      ]} />



    </div >

  )
}

export default ITRFiling