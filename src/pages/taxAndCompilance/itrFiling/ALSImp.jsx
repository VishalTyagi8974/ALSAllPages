import React from 'react'
import ITRForm from './itrForm/ITRForm'
const icon = <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#9966ff"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="  lucide lucide-circle-check-icon lucide-circle-check"
    style={{ marginBottom: "2px" }}
>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />

</svg >

const ALSImp = () => {


    return (
        <div className="position-relative my-3 my-md-4 py-4 py-md-5 w-100" >
            <section className=" text-start  mx-auto py-2 z-1  mainContainer" >
                <div className=' px-1' style={{ color: "#5b5b5b" }}>

                    <div className='row '>
                        <div className='col-xl-5 my-auto order-xl-2 ps-xl-5'>
                            <h1 className="secondMainColor display-6 fw-bold  mb-5  ">
                                Streamline Your ITR Filing with Apka Legal Salahkar
                            </h1>

                            <ul className='list-unstyled  mt-4 mb-5' style={{ fontSize: "1rem" }}>
                                <li className="" style={{ marginBottom: "33px" }}>{icon} Maximize savings with eligible tax deductions.</li>
                                <li className="" style={{ marginBottom: "33px" }}>{icon} Personalized solutions for your unique tax needs.</li>
                                <li className="" style={{ marginBottom: "33px" }}>{icon} Hassle-free and error-free filing process.</li>
                                <li className="" style={{ marginBottom: "33px" }}>{icon} Stay compliant and avoid penalties.</li>
                                <li className="" style={{ marginBottom: "33px" }}>{icon} Real-time updates and easy ITR status tracking.</li>
                                <li className="" style={{ marginBottom: "33px" }}>{icon} Backed by experienced consultants, even in audits.</li>
                            </ul>


                        </div>

                        <div className='  col-xl-7 order-xl-1 px-0 '>
                            <ITRForm />
                        </div>
                    </div>
                </div>
            </section >
        </div>

    )
}

export default ALSImp