const points = [
    {
        title: "Legal Requirement",
        description:
            "GST registration is mandatory for businesses exceeding the threshold turnover, ensuring they operate legally under Indian tax laws.",
    },
    {
        title: "Input Tax Credit",
        description:
            "Registered businesses can claim credit on the GST paid for purchases, significantly reducing their overall tax liability and improving profit margins.",
    },
    {
        title: "Business Expansion",
        description:
            "GST registration is essential for selling on e-commerce platforms, opening branches in multiple states, or dealing with inter-state trade.",
    },
    {
        title: "Builds Credibility",
        description:
            "Having a GST number builds trust with customers and vendors, making your business look professional, compliant, and reliable.",
    },
    {
        title: "Avoids Penalties",
        description:
            "Unregistered businesses may face hefty fines and legal complications. GST registration helps you stay compliant and penalty-free.",
    },
    {
        title: "Easy Compliance",
        description:
            "The GST system simplifies indirect taxation by unifying various state and central taxes, reducing paperwork and administrative hassle.",
    },
];



const WhyGSTRegistration = () => {
    return (
        <section className="mainContainer  py-5 mx-auto">
            <h2 className=" text-center display-5 fw-semibold secondMainColor"> Benefits of GST Registration for Your Business</h2>
            <div className='d-flex my-4 flex-wrap justify-content-center '>
                {points.map((point, index) => (
                    <div key={index} className="WhyGSTCard my-4 mx-2 mx-md-4  " style={{ padding: "45px 35px" }}>
                        <h6 className=" fs-5 fw-semibold">{point.title}</h6>
                        <p className=" para " style={{ fontSize: '0.95rem' }}>{point.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhyGSTRegistration