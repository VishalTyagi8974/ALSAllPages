import React from 'react'
import UserFormPage from '../../../components/userForm/UserFormPage'
import "./TrademarkRegistration.css"
import FocusButton from '../../../components/focusButtons/FocusButton'


const TrademarkRegistration = () => {
    return (
        <div className='w-100 d-flex justify-content-center flex-wrap'>
            <div className='HeroTrademarkRegistrationSection'></div>
            <section className="position-relative my-3 my-md-4  " >

                <div className=" text-start  position-relative mx-auto py-2 z-1 row  mainContainer" >
                    <div className=' col-lg-6 col-xl-7 px-0'>
                        <h1 className="secondMainColor display-1 fw-bold  mb-4 mb-sm-3 ">
                            Protect Your Brand with  Trademark Registration
                        </h1>
                        <p className="para  mt-3 mb-4" style={{ fontSize: "1.2rem" }}>
                            Your brand is your identity, don’t leave it unprotected. Secure your logo, name, or tagline with our fast and reliable trademark registration service. From application to approval, we guide you every step of the way so your business stands strong, uniquely yours.
                        </p>
                        <FocusButton focusElementId={"focusGenericForm"} buttonText={<>Starts at  &#x20b9;889</>} />
                    </div>


                    <div className=' col-lg-6 col-xl-5 px-0 '>
                        <div id="focusGenericForm" tabIndex="0" className='glowingElement mx-0 mx-md-4 rounded-4'> <UserFormPage selectedOption={"Trademark Registration"} isFixed={true} /></div>
                    </div>
                </div >
            </section >
        </div >
    )
}

export default TrademarkRegistration;