import React from 'react'
import AnimatedCardTwo from '../../../components/animatedCards/AnimatedCardTwo'

const WhatIsGSTReturn = () => {
    return (
        <div className=' w-100' >
            <section className="mainContainer mx-auto  py-5 row ">
                <div className='col-xl-5 h-100' >
                    <AnimatedCardTwo heading={"What is GST Return Filing?"} paragraph={<>    GST return filing is the process where registered taxpayers report their business's financial activity to the government, ensuring proper tax collection and payment under the GST regime. <br />  <br />      Filing GST returns on time is crucial to avoid penalties and ensure accurate tax payments and input tax credits.
                    </>} />
                </div>
                <div className=' col-xl-7 h-100 '>
                    <AnimatedCardTwo heading={"Who Should File GST Returns?"} pointers={[
                        "Registered businesses under GST.",
                        "Businesses under the composition scheme.",
                        "E-commerce platforms and their sellers.",
                        "Exporters and importers of goods/services.",
                        "GST-registered professionals and service providers.",
                        "Businesses with inter-state sales."
                    ]
                    } />
                </div>


            </section>
        </div>

    )
}

export default WhatIsGSTReturn