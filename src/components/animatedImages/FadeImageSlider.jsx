import { useEffect, useState } from 'react';
import "./FadeImage.css"

const FadeImageSlider = ({ images }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fade-slider p-5 rounded-5 mx-auto   ">
            {images.map((imgSrc, index) => (
                <img
                    key={index}
                    src={imgSrc}
                    className={`fade-image  rounded-5 shadow  ${index === currentIndex ? 'active' : ''}`}
                    alt="Sliding Images"
                />
            ))}
        </div>
    );
};

export default FadeImageSlider;
