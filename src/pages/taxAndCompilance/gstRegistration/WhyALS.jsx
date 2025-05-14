
import affordable from "../../../animations/affordable.json"
import experts from "../../../animations/experts.json"
import data from "../../../animations/data.json"
import fast from "../../../animations/fast.json"
import transparent from "../../../animations/transparent.json"
import allday from "../../../animations/allday.json"
import ontime from "../../../animations/ontime.json"
import quick from "../../../animations/quick.json"
import namaste from "../../../animations/namaste.json"
import online from "../../../animations/online"
// import './WhyUs.css'; // Custom bubble styles
import HoverCard from '../../../components/hoverCards/HoverCard';


const whyChooseUs = [
    {
        title: <>Expert Legal <br /> Professionals</>,
        icon: experts
    },
    {
        title: <>Affordable <br /> Pricing</>,
        icon: affordable
    },
    {
        title: <>Fast <br /> Turnaround</>,
        icon: quick
    },
    {
        title: <>100% Online <br /> Process</>,
        icon: online
    },
    {
        title: <>PAN India <br /> Services</>,
        icon: namaste
    },
    {
        title: <>Dedicated <br /> User Support</>,
        icon: allday
    },
    {
        title: <>Transparent <br /> Process</>,
        icon: transparent
    },

    {
        title: <>Real-Time <br /> Updates</>,
        icon: ontime
    },
    {
        title: <>Secure <br /> Data Handling</>,
        icon: data
    }

];


const WhyALS = () => {
    return (
        <div className="why-us-section py-5 bg-white text-center w-100 mb-5">
            <section className="container mx-auto mainContainer">
                <h2 className="mb-5 display-6 fw-bold secondMainColor">Why Choose Apka Legal Salahkar?</h2>
                <div className="row justify-content-center  my-4">
                    {whyChooseUs.map((item, idx) => (
                        <HoverCard styles={{ borderRadius: "50%", width: "235px", height: "240px" }} key={idx} title={item.title} hoverColor={"#9966ff"} animationData={item.icon}
                        />
                    ))}
                </div>
            </section>

        </div >
    );
};

export default WhyALS;
