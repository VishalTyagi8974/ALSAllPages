import React, { useState } from "react";
import "./HoverCard.css"; // Optional CSS file
import Lottie from "lottie-react";


const HoverCard = ({
    initialColor,
    hoverColor,
    title,
    description,
    animationData,
    textAlign = "text-start",
    flexDirection = "flex-column justify-content-between",
    cardSizing = "whyUsCards",
    styles

}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`hover-card ${textAlign} m-3 d-flex ${flexDirection}  bubble ${cardSizing}`}
            style={{
                backgroundColor: isHovered ? hoverColor : initialColor,
                color: isHovered ? "white" : hoverColor,
                transition: "background-color 0.5s ease, color 0.5s ease",
                ...styles

            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            <div className="d-flex flex-column justify-content-center mt-0">
                <Lottie animationData={animationData} autoPlay={true} loop={true} className="lottieHeights" />
                <h3 className="display-6 fw-bold text-center mt-3" style={{ fontSize: "1.2rem" }}>
                    {title}
                </h3>
                <p className="fw-normal" style={{ fontSize: "1rem" }}>
                    {description}
                </p>
            </div>
        </div >
    );
};

export default HoverCard;
