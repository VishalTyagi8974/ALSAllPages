import React from 'react'
import FadeImageSlider from '../../../components/animatedImages/FadeImageSlider'
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

const gstDocuments = [
    "PAN card of the business or applicant",
    "Aadhaar card of the proprietor or partners",
    "Photograph of the applicant",
    "Business address proof (Electricity bill, Rent Agreement, etc.)",
    "Bank account statement or a cancelled cheque",
    "Digital Signature (for companies and LLPs)",
    "Incorporation Certificate or Partnership Deed (if applicable)",
    "Board resolution or authorization letter (for authorized signatory)",
];


const GSTDocuments = () => {
    return (
        <>

            <div className='py-5 w-100'>
                <section className='  mainContainer mx-auto py-4 '>
                    <div className='bg-white pt-5 pb-4 px-4 px-md-5 rounded-5 shadow ' style={{ borderTop: "7px solid #9966ff" }}>
                        <h2 className="mb-4 mb-md-5 mt-0 mt-lg-2  text-start text-lg-center display-7 secondMainColor fw-bold" style={{ padding: "0 30px" }}>
                            Documents Required for GST Registration
                        </h2>
                        <div className="row">
                            <div className="col-12 col-lg-5 d-none d-xl-block mt-4 mx-auto" >

                                <FadeImageSlider images={["/gstRegPage/AnimatedImages/img1.jpg", "/gstRegPage/AnimatedImages/img2.jpg", "/gstRegPage/AnimatedImages/img3.jpg"]} />
                            </div>



                            <div className='col-lg-7 mt-2'>
                                {gstDocuments.map((doc, index) => (
                                    <div key={index}>

                                        <div className=" d-flex align-items-start " style={{ marginBottom: "32px" }}>
                                            <div>
                                                <h5 className=' '>
                                                    <i className={`bi bi-${index + 1}-circle-fill mainColor me-2 `}></i>
                                                </h5>
                                            </div>
                                            <div>
                                                <h5 className="  mb-1 para " style={{ paddingTop: "2px", fontSize: "0.95rem" }}>
                                                    {doc}
                                                </h5>

                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default GSTDocuments