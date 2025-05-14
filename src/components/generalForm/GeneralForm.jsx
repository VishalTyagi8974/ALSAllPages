import React from 'react';
import Select from 'react-select';
import './GeneralForm.css';

const customStyles = {
    control: (provided) => ({
        ...provided,
        padding: '2px',
        fontSize: '0.85rem',
        borderRadius: '30px',
        border: '2px solid #ced4da',
        boxShadow: 'none',
        '&:hover': { borderColor: '#86b7fe' }
    }),
    option: (provided, state) => ({
        ...provided,
        fontSize: '0.9rem',
        padding: '10px 15px',
        backgroundColor: state.isFocused ? '#f1f1f1' : 'white',
        color: 'black',
        cursor: 'pointer',
    }),
};

const GeneralForm = ({ options, value, onChange, menuPlacement = "bottom", placeholder = "-- Choose an Option --" }) => {
    return (
        <Select
            options={options}
            styles={customStyles}
            placeholder={placeholder}
            isSearchable
            value={value}
            onChange={onChange}
            menuPlacement={menuPlacement}
        />
    );
};

export default GeneralForm;
