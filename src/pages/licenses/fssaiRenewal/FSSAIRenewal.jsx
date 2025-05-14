import React from 'react'
import UserFormPage from '../../../components/userForm/UserFormPage'
import "./FSSAIRenewal.css"
import FocusButton from '../../../components/focusButtons/FocusButton'

const FSSAIRenewal = () => {
    return (
        <div className='w-100 d-flex justify-content-center flex-wrap'>
            <div className='HeroFSSAIRenewalSection'></div>
            <section className="position-relative my-3 my-md-4  " >

                <div className=" text-start  position-relative mx-auto py-2 z-1 row  mainContainer" >
                    <div className=' col-lg-6 col-xl-7 px-0'>
                        <h1 className="secondMainColor display-1 fw-bold  mb-4 mb-sm-3 ">
                            Keep Your Food License Active with FSSAI Renewal
                        </h1>
                        <p className="para  mt-3 mb-4" style={{ fontSize: "1.1rem" }}>
                            Timely FSSAI renewal is essential to continue operating your food business legally and without interruption. Stay compliant, avoid penalties, and maintain customer trust by renewing your license before it expires.   </p>
                        <FocusButton focusElementId={"focusGenericForm"} buttonText={<>Starts at  &#x20b9;889</>} />
                    </div>


                    <div className=' col-lg-6 col-xl-5 px-0 '>
                        <div id="focusGenericForm" tabIndex="0" className='glowingElement mx-0 mx-md-4 rounded-4'> <UserFormPage selectedOption={"FSSAI Renewal"} isFixed={true} /></div>
                    </div>
                </div >
            </section >
        </div >
    )
}

export default FSSAIRenewal;