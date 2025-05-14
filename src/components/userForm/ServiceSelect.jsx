// ServiceSelect.jsx
import React from 'react';
import Select from 'react-select';

const groupedOptions = [
    {
        label: "INCOME TAX",
        options: [
            {
                value: "ITR Filing",
                label: (
                    <>
                        <i className="bi bi-file-earmark-text-fill thirdMainColor dropDownIcons"></i>{" "}
                        Income Tax Return (ITR) Filing
                    </>
                ),
            },
            {
                value: "ITR Notice Appeal",
                label: (
                    <>
                        <i className="bi bi-exclamation-circle-fill thirdMainColor dropDownIcons"></i>{" "}
                        ITR Notice/Appeal
                    </>
                ),
            },
            {
                value: "Tax Planning",
                label: (
                    <>
                        <i className="bi bi-lightbulb-fill thirdMainColor dropDownIcons"></i>{" "}
                        Tax Planning
                    </>
                ),
            },
        ],
    },
    {
        label: "GST",
        options: [
            {
                value: "GST Registration",
                label: (
                    <>
                        <i className="bi bi-pen-fill thirdMainColor dropDownIcons"></i>{" "}
                        GST Registration
                    </>
                ),
            },
            {
                value: "GST Return Filing",
                label: (
                    <>
                        <i className="bi bi-file-earmark-check-fill thirdMainColor dropDownIcons"></i>{" "}
                        GST Return Filing
                    </>
                ),
            },
        ],
    },
    {
        label: "TRADEMARK",
        options: [
            {
                value: "Trademark Registration",
                label: (
                    <>
                        <i className="bi bi-pen-fill thirdMainColor dropDownIcons"></i>{" "}
                        Trademark Registration
                    </>
                ),
            },
            {
                value: "Trademark Renewal",
                label: (
                    <>
                        <i className="bi bi-disc-fill thirdMainColor dropDownIcons"></i>{" "}
                        Trademark Renewal
                    </>
                ),
            },
        ],
    },
    {
        label: "Copyright Registration",
        options: [
            {
                value: "Copyright Registration",
                label: (
                    <>
                        <i className="bi bi-file-earmark-text-fill thirdMainColor dropDownIcons"></i>{" "}
                        Copyright Registration
                    </>
                ),
            },
        ],
    },
    {
        label: "LICENSES",
        options: [
            {
                value: "FSSAI Registration",
                label: (
                    <>
                        <i className="bi bi-file-earmark-text-fill thirdMainColor dropDownIcons"></i>{" "}
                        FSSAI Registration
                    </>
                ),
            },
            {
                value: "FSSAI Renewal",
                label: (
                    <>
                        <i className="bi bi-disc-fill thirdMainColor dropDownIcons"></i>{" "}
                        FSSAI Renewal
                    </>
                ),
            },
        ],
    },
    {
        label: "OTHERS",
        options: [
            {
                value: "ISO Certification",
                label: (
                    <>
                        <i className="bi bi-check2-circle thirdMainColor dropDownIcons"></i>{" "}
                        ISO Certification
                    </>
                ),
            },
        ],
    },
];


const customStyles = {
    control: (provided) => ({
        ...provided,
        padding: "5px",
        fontSize: "0.9rem",
        borderRadius: "30px",
        borderColor: "#ced4da",
        boxShadow: "none",
        '&:hover': { borderColor: '#86b7fe' }
    }),
    option: (provided, state) => ({
        ...provided,
        fontSize: "0.9rem",
        padding: "10px 15px",
        backgroundColor: state.isFocused ? "#f1f1f1" : "white",
        color: "black",
        cursor: "pointer",
    }),
};

const findOptionByValue = (value) => {
    for (let group of groupedOptions) {
        for (let option of group.options) {
            if (option.value === value) {
                return option;
            }
        }
    }
    return null;
};

function ServiceSelect({ value, onChange, isFixed = false }) {
    const selectedValue = findOptionByValue(value) || value;
    return (
        <Select
            options={groupedOptions}
            styles={customStyles}
            placeholder="-- Choose a Service --"
            isSearchable
            value={selectedValue}
            onChange={onChange}
            menuPlacement="top"
            isDisabled={isFixed}
        />
    );
}

export default ServiceSelect;
