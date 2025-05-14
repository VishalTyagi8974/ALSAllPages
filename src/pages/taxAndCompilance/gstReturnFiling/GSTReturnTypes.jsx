import React from 'react'
import AnimatedCard from '../../../components/animatedCards/AnimatedCard';
const gstReturnCards = [
    {
        heading: "GSTR-1",
        paragraph: "Filed monthly or quarterly, GSTR-1 is used to report outward supplies (sales) of goods or services. It includes invoice-level details for B2B and B2C sales."
    },
    {
        heading: "GSTR-3B",
        paragraph: "This is a monthly self-declaration summary return where businesses report total sales, purchases, and tax liability. It must be filed even if there is no transaction."
    },
    {
        heading: "GSTR-4",
        paragraph: "Applicable to composition scheme taxpayers, GSTR-4 is filed annually and summarizes their total turnover and tax paid at a fixed rate."
    },
    {
        heading: "GSTR-5",
        paragraph: "Filed by non-resident taxable persons, GSTR-5 includes details of all outward and inward supplies, tax paid, and remaining tax liabilities."
    },
    {
        heading: "GSTR-6",
        paragraph: "Filed monthly by Input Service Distributors (ISD), GSTR-6 contains details of input tax credit distributed among branches or units."
    },
    {
        heading: "GSTR-7",
        paragraph: "Filed by persons required to deduct TDS under GST, GSTR-7 contains details of the TDS deducted, TDS liability payable, and paid."
    },
    {
        heading: "GSTR-8",
        paragraph: "Filed by e-commerce operators, GSTR-8 includes details of supplies made through the platform and the TCS (Tax Collected at Source) collected."
    },
    {
        heading: "GSTR-9",
        paragraph: "This is the annual return filed by regular taxpayers summarizing all monthly/quarterly returns filed during the year."
    },
    {
        heading: "GSTR-9C",
        paragraph: "A reconciliation statement filed by businesses with turnover above ₹5 crore. It is certified by a CA and includes audited financials."
    },
    {
        heading: "GSTR-10",
        paragraph: "Also known as the final return, GSTR-10 is filed by taxpayers whose GST registration has been cancelled or surrendered."
    },
    {
        heading: "GSTR-11",
        paragraph: "Filed by persons with a Unique Identity Number (UIN) like embassies, to claim a refund on inward supplies."
    }
];


const GSTReturnTypes = () => {
    return (
        <section className="mainContainer  py-5 mx-auto">
            <h2 className=" text-center display-5 fw-semibold secondMainColor mb-5"> A Guide to Various GST Return Forms</h2>
            <div className='d-flex my-4 flex-wrap justify-content-around flex-wrap'>
                {gstReturnCards.map((point, index) => (
                    <AnimatedCard heading={point.heading} paragraph={point.paragraph} animationType={index % 3} />
                ))}
            </div>
        </section>
    )
}

export default GSTReturnTypes