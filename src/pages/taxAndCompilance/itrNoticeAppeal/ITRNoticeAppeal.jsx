import UserFormPage from '../../../components/userForm/UserFormPage'
import "./ITRNoticeAppeal.css"
import FocusButton from '../../../components/focusButtons/FocusButton'


const ITRNoticeAppeal = () => {
    return (
        <div className='w-100 d-flex justify-content-center flex-wrap'>
            <div className='HeroAppealSection'></div>
            <section className="position-relative my-3 my-md-4  " >

                <div className=" text-start  position-relative mx-auto py-2 z-1 row  mainContainer" >
                    <div className=' col-lg-6 col-xl-7 px-0'>
                        <h1 className="secondMainColor display-1 fw-bold  mb-4 mb-sm-3  ">
                            Handle ITR Notices & Appeals the Stress-Free Way
                        </h1>
                        <p className="para   mt-2 mb-4" style={{ fontSize: "1.1rem" }}>
                            Received a tax notice? Don’t panic, We’re here to help. Whether it’s a mismatch, demand, or scrutiny notice, our expert-driven platform simplifies the response and appeals process. Get step-by-step support, clear explanations, and fast resolutions, all online, all hassle-free.                        </p>
                        <FocusButton focusElementId={"focusGenericForm"} buttonText={<>Starts at  &#x20b9;889</>} />

                    </div>
                    <div className=' col-lg-6 col-xl-5 px-0 '>
                        <div id="focusGenericForm" tabIndex="0" className='glowingElement mx-0 mx-md-4 rounded-4'><UserFormPage selectedOption={"ITR Notice Appeal"} isFixed={true} />
                        </div>
                    </div>
                </div>

            </section >
        </div>
    )
}

export default ITRNoticeAppeal