

const CardOne = ({ title, description, svg, bg = "#ffffff00" }) => {

    return (
        <div className="card shadow mx-auto border-0 rounded-4" style={{ width: '18.5rem', padding: "22px" }}>
            <div className="card-body">
                <div className="mb-4" style={{ backgroundColor: bg }}>{svg}</div>

                <h5 className="card-title mb-2 mt-3 secondMainColor">{title}</h5>
                <p className="para mb-0 mt-1">{description}</p>
            </div>
        </div>
    );
};

export default CardOne;
