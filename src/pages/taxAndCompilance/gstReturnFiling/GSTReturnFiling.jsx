import React from 'react'
import UserFormPage from '../../../components/userForm/UserFormPage'
import "./GSTReturnFiling.css"
import FocusButton from '../../../components/focusButtons/FocusButton'
import GSTReturnFilingDocuments from './GSTReturnFilingDocuments'
import GSTReturnTypes from './GSTReturnTypes'
import FAQ from '../../../components/FAQ/FAQ'
import WhatIsGSTReturn from './WhatIsGSTReturn'

const GSTReturnFiling = () => {
    return (
        <div className='w-100 d-flex justify-content-center flex-wrap'>
            <div className='HeroGSTReturnFilingSection'></div>
            <section className="position-relative my-3 my-md-4  " >

                <div className=" text-start  position-relative mx-auto py-2 z-1 row  mainContainer" >
                    <div className=' col-lg-6 col-xl-7 px-0'>
                        <h1 className="secondMainColor display-1 fw-bold  mb-4 mb-sm-3 ">
                            Simplify GST Return  Filing and Boost Your Business
                        </h1>
                        <p className="para  mt-3 mb-4" style={{ fontSize: "1.1rem" }}>
                            Filing GST returns is a vital part of running a registered business in India. It ensures transparency, avoids penalties, and keeps your business compliant with tax regulations while enabling smooth input tax credit claims.</p>
                        <FocusButton focusElementId={"focusGenericForm"} buttonText={<>Starts at  &#x20b9;889</>} />
                    </div>


                    <div className=' col-lg-6 col-xl-5 px-0 '>
                        <div id="focusGenericForm" tabIndex="0" className='glowingElement mx-0 mx-md-4 rounded-4'> <UserFormPage selectedOption={"GST Return Filing"} isFixed={true} /></div>
                    </div>
                </div >
            </section >


            <WhatIsGSTReturn />


            <GSTReturnFilingDocuments />
            <GSTReturnTypes />

            <FAQ faqData={[

                {
                    question: "Who needs to file GST returns?",
                    answer: "All businesses registered under GST, including regular taxpayers, composition dealers, e-commerce operators, and non-resident taxable persons, must file GST returns as per their category."
                },

                {
                    question: "What is the due date for filing GST returns?",
                    answer: "Due dates vary by return type. For example, GSTR-1 is due monthly or quarterly, GSTR-3B is due monthly, and GSTR-9 is due annually. It's important to check the official GST calendar for exact dates."
                },
                {
                    question: "What happens if I miss the GST return due date?",
                    answer: "Late filing of GST returns may result in a late fee, interest on the tax amount, and a restriction on generating e-way bills. Continuous non-filing may lead to cancellation of GST registration."
                },
                {
                    question: "Can I revise a GST return after filing?",
                    answer: "GST returns cannot be revised once filed. However, any mistakes or omissions can be corrected in the return of a subsequent month or period."
                },

                {
                    question: "Is GST return filing mandatory even with no sales?",
                    answer: "Yes, even if there are no transactions during a period, a NIL return must be filed to stay compliant and avoid penalties."
                }
            ]} />

        </div >
    )
}

export default GSTReturnFiling;
