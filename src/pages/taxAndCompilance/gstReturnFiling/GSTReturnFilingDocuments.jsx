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

const mandatoryDocuments = [
    "GSTIN (Goods and Services Tax Identification Number)",
    "Sales Invoices (Outward supplies)",
    "Purchase Invoices (Inward supplies)",
    "Input Tax Credit (ITC) details"
];

const additionalDocuments = [
    "Debit Notes and Credit Notes",
    "Expense Bills",
    "Bank Statements",
    "HSN/SAC codes summary",
    "Tax payment challans (if any)",
    "Previous GST returns (if applicable)",
    "E-commerce sales reports (if applicable)",
    "Details of advances received or paid",
    "Reconciliation statements (books vs portal)"
];



const GSTReturnFilingDocuments = () => {
    return (
        <>

            <div className='py-5 w-100'>
                <section className='  mainContainer mx-auto py-4 '>
                    <div className='bg-white pt-5 pb-4 px-4 px-md-5 rounded-5 shadow ' style={{ borderTop: "7px solid #9966ff" }}>

                        <div className="row">



                            <div className='col-lg-6 mt-2 mb-4 mb-md-5 px-4 d-flex flex-column justify-content-center' >
                                <h2 className="mb-5 mt-0 mt-lg-2  text-start  display-6 secondMainColor fw-bold" >
                                    Documents Required for GST Registration
                                </h2>
                                <div className='px-0 px-lg-1'>
                                    <h6 className='secondMainColor fw-bold mb-3' style={{ fontSize: "1.2rem" }}>Mandatory Documents</h6>
                                    {mandatoryDocuments.map((doc, index) => (
                                        <div key={index} >

                                            <div className=" d-flex align-items-start mb-3">
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
                            <div className='col-lg-6   px-4'>
                                <h6 className='secondMainColor fw-bold mb-3' style={{ fontSize: "1.2rem" }}>Additional Documents</h6>
                                {additionalDocuments.map((doc, index) => (
                                    <div key={index}>

                                        <div className=" d-flex align-items-start mb-3 ">
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
                </section >
            </div >

        </>
    )
}

export default GSTReturnFilingDocuments