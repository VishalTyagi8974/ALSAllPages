import { useRef } from "react";


export default function FocusButton({ focusElementId, buttonText }) {
    const handleClick = () => {
        document.getElementById(focusElementId).focus();
    };

    return (
        <div>
            <button onClick={handleClick} className='btn btn-secondary genericButtons mb-5 rounded-pill glowingEffect py-2 px-3'>{buttonText}<i className="bi bi-chevron-right  " style={{ fontSize: "0.9rem" }}></i></button>
        </div>
    );
}
