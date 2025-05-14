// src/components/ITRFormSelector.jsx
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { getITRForm } from '../../../../../utils/getITRForm'; // Importing the utility function
import "./ITRForm.css"
import { itrFormsData } from './itrFormsData';
import axios, { all } from 'axios';


const scriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
const scriptITRURL = import.meta.env.VITE_GOOGLE_SCRIPT_ITR_URL;


const rightIcon = <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="green"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="  lucide lucide-circle-check-icon lucide-circle-check me-2"
    style={{ marginBottom: "2px" }}
>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />

</svg >
const wrongIcon = <svg xmlns="http://www.w3.org/2000/svg" height="23" width="23"
    viewBox="0 0 16 16" strokeWidth="2" fill="currentColor" className="bi bi-x-circle mb-1 me-1 ms-1">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
</svg>



import GeneralForm from '../../../../components/generalForm/GeneralForm';
const entityOptions = [
    { value: 'Individual', label: 'Individual' },
    { value: 'HUF', label: 'HUF' },
    { value: 'Company', label: 'Company' },
    { value: 'Firm', label: 'Firm' },
    { value: 'LLP', label: 'LLP' },
    { value: 'Trust', label: 'Trust' },
    { value: 'NGO', label: 'NGO' },
    { value: 'Political Party', label: 'Political Party' },
    { value: "Research Body", label: "Research Body" },
    { value: "Educational Institution", label: "Educational Institution" },
    { value: "Investment Fund", label: "Investment Fund" }
];
const incomeTypes = [
    "Salary",
    "House Property",
    "Capital Gains",
    "Business Income",
    "Professional Income",
    "Interest Income",
    "Foreign Income",
    "Agri Income > 5000",
    "Crypto Currency",
    "Lottery / Gambling",
    "Dividend Income"
]


const residentOptions = [
    { value: "Yes", label: 'Yes' },
    { value: "No", label: 'No' }
];


const ITRForm = () => {
    const { control, register, handleSubmit, watch, formState: { errors }, reset } = useForm({
        defaultValues: {
            entityType: "Individual",   // value, not label
            isResident: "Yes"           // value, not label
        }
    });

    const [showResults, setShowResults] = useState(false);
    const [formData, setFormData] = useState({});

    const onSubmit = async (data) => {
        const incomeSources = incomeTypes.filter((source) => data[source] === true)
        const allSources = incomeSources.join(", ")

        const user = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            entityType: data.entityType,
            isResident: data.isResident === "Yes",

            incomeSources: incomeSources,


            turnover: parseFloat(data.turnover),
            numberOfHouseProperties: parseInt(data.numberOfHouseProperties),
            agriculturalIncome: parseFloat(data.agriculturalIncome),

            usesPresumptiveScheme: data.usesPresumptiveScheme === true,
            isDirectorInCompany: data.isDirectorInCompany === true,
            hasForeignAssets: data.hasForeignAssets === true,
            isPartnerInFirm: data.isPartnerInFirm === true,
            holdsUnlistedShares: data.holdsUnlistedShares === true,

        };

        const itrForm = getITRForm(user);

        setFormData(itrFormsData[itrForm]);
        setShowResults(true);

        user.suggestedITRForm = itrFormsData[itrForm].formNumber
        user.incomeSources = allSources

        try {

            await axios.post(scriptITRURL, user, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });



        } catch (err) {
            console.error("Form submission error:", err);
        }

        try {
            await axios.post(
                scriptURL,
                {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    service: "ITR-Filing"
                },
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }

            );

        } catch (err) {
            console.error("Form submission error:", err);
        }
    };



    const handleBackClick = () => {
        setShowResults(false);
    }

    return (
        <div className="container tab-screen mx-auto mt-3 mt-lg-0 px-4 px-sm-5 shadow position-relative" >
            {showResults && <button className="btn btn-light p-0   position-absolute left-0" style={{ marginTop: "25px", height: "25px", fontSize: "1rem", fontWeight: "500", width: "25px" }} onClick={handleBackClick}>
                <i className="bi bi-chevron-left"></i>
            </button>}

            {!showResults ?
                <>
                    <h2 className="mt-4 mb-4 fs-4 fw-semibold secondMainColor text-center">Know Your ITR Form</h2>


                    <form onSubmit={handleSubmit(onSubmit)} className='fw-normal mt-1 ItrFormData' style={{ fontSize: "0.85rem", color: "black", overflowY: "auto", overflowX: "hidden" }}>
                        <div className="mb-3 row mt-3 d-flex align-items-baseline" >

                            <div className="col-md-4 mt-3">
                                <label htmlFor="name" className="form-label ">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    placeholder='Enter your name'
                                    className="form-control border-2 rounded-pill"
                                    {...register('name', { required: 'Full name is required' })}
                                />
                                {errors.name && <p className="text-danger">{errors.name.message}</p>}
                            </div>



                            <div className="col-md-4 mt-3">
                                <label htmlFor="email" className="form-label">Email</label>

                                <input
                                    type="email"
                                    id="email"
                                    placeholder='abcd@xyz.com'
                                    className="form-control  border-2 rounded-pill"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: 'Invalid email address',
                                        },
                                    })}
                                />
                                {errors.email && <p className="text-danger">{errors.email.message}</p>}
                            </div>


                            <div className="col-md-4 mt-3">
                                <label htmlFor="phone" className="form-label">Phone</label>


                                <input
                                    type="tel"
                                    id="phone"
                                    className="form-control  border-2 rounded-pill"
                                    placeholder="10-digit number"
                                    {...register('phone', {
                                        required: 'Phone number is required',
                                        pattern: {
                                            value: /^\d{10}$/,
                                            message: 'Must be a 10-digit number',
                                        },
                                    })}
                                />
                                {errors.phone && <p className="text-danger">{errors.phone.message}</p>}

                            </div>
                        </div>

                        <div className="row " >
                            <div className="col-md-6 mt-3">
                                <label className="form-label">Entity Type</label>
                                <Controller
                                    name="entityType"
                                    control={control}
                                    render={({ field }) => (
                                        <GeneralForm
                                            {...field}
                                            options={entityOptions}
                                            value={entityOptions.find((opt) => opt.value === field.value)} // display correct label
                                            onChange={(selectedOption) => field.onChange(selectedOption.value)} // store only value
                                        />
                                    )}
                                />

                            </div>

                            <div className="col-md-6 mt-3">
                                <label className="form-label">Resident</label>
                                <Controller
                                    name="isResident"
                                    control={control}
                                    render={({ field }) => (
                                        <GeneralForm
                                            {...field}
                                            options={residentOptions}
                                            value={residentOptions.find((opt) => opt.value === field.value)} // display correct label
                                            onChange={(selectedOption) => field.onChange(selectedOption.value)} // store only value (true/false)
                                        />
                                    )}
                                />



                            </div>
                        </div>


                        <div className=" mt-4">
                            <label className="form-label">Income Sources</label>

                            <div className="row" style={{ color: "#5b5b5b" }}>
                                {incomeTypes.map((value, index) => (
                                    <div className="col-md-4" key={index}>
                                        <div className="form-check mb-2">
                                            <input
                                                className="form-check-input border-2"
                                                type="checkbox"
                                                id={value}
                                                {...register(value, {
                                                    setValueAs: val => val === true || val === "true"
                                                })}
                                            />
                                            <label className="form-check-label" htmlFor={value}>
                                                {value}
                                            </label>
                                        </div>
                                    </div>
                                ))}

                            </div>

                        </div>


                        {/* Additional Fields */}
                        <div className="mb-3 row mt-3 d-flex align-items-baseline" >

                            <div className="col-md-4 mt-3">
                                <label className="form-label">Turnover</label>
                                <input className="form-control border-2 rounded-pill" defaultValue={0} type="number" {...register("turnover")} />
                            </div>
                            <div className="col-md-4 mt-3">
                                <label className="form-label">No. of House Properties</label>
                                <input className="form-control border-2 rounded-pill" defaultValue={0} type="number" {...register("numberOfHouseProperties")} />
                            </div>
                            <div className="col-md-4 mt-3">
                                <label className="form-label">Agricultural Income</label>
                                <input className="form-control border-2 rounded-pill" defaultValue={0} type="number" {...register("agriculturalIncome")} />
                            </div>
                        </div>



                        {/* Checkbox Options */}
                        <div className="mb-3 row mt-4" style={{ color: "#5b5b5b" }} >
                            <label className="form-label text-black">Additional Details</label>
                            <div className="col-md-4 mt-1">
                                <div className="form-check">
                                    <input className="form-check-input border-2" type="checkbox" {...register("usesPresumptiveScheme")} />
                                    <label className="form-check-label">Uses Presumptive Scheme</label>
                                </div>
                            </div>
                            <div className="col-md-4 mt-1">
                                <div className="form-check">
                                    <input className="form-check-input border-2" type="checkbox" {...register("isDirectorInCompany")} />
                                    <label className="form-check-label">Director in Company</label>
                                </div>
                            </div>
                            <div className="col-md-4 mt-1">
                                <div className="form-check">
                                    <input className="form-check-input border-2" value={true} type="checkbox" {...register("hasForeignAssets")} />
                                    <label className="form-check-label">Has Foreign Assets</label>
                                </div>
                            </div>
                            <div className="col-md-4 mt-1 mt-md-2">
                                <div className="form-check">
                                    <input className="form-check-input border-2" type="checkbox" {...register("isPartnerInFirm")} />
                                    <label className="form-check-label">Partner in Firm</label>
                                </div>
                            </div>
                            <div className="col-md-4 mt-1 mt-md-2">
                                <div className="form-check">
                                    <input className="form-check-input border-2" type="checkbox" {...register("holdsUnlistedShares")} />
                                    <label className="form-check-label">Holds Unlisted Shares</label>
                                </div>
                            </div>
                        </div>



                        <button type="submit" className="btn btn-secondary genericButtons w-100 rounded-4 mt-3 mb-2">Submit</button>
                    </form >
                </> :
                <>
                    <h2 className="mt-4 mb-4 fs-4 fw-semibold secondMainColor text-center">Suggested ITR Form</h2>
                    <div className="mx-2 para ItrFormResults" style={{ overflowY: "scroll", fontSize: "0.9rem" }}>
                        <div className=" mt-3">
                            <div className="card-body">
                                <h2 className="card-title mainColor mb-3">{formData.formNumber}</h2>
                                <p className="card-text mb-4">{formData.description}</p>
                                <div className='mb-4'>
                                    <h5 className="secondMainColor"><i className="bi-file-earmark-text-fill me-2"></i>Documents Required</h5>
                                    <ul className="">
                                        {formData.documents.map((item, index) => (
                                            <li className="" key={index}> {item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-4">
                                    <h5 className="text-success">{rightIcon}Who Should Fill This Form:</h5>
                                    <ul className="">
                                        {formData.forWho.map((item, index) => (
                                            <li className="" key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="">
                                    <h5 className="text-danger">{wrongIcon} Who Should NOT Fill This Form:</h5>
                                    <ul className="">
                                        {formData.whoNotTo.map((item, index) => (
                                            <li className="" key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>

                </>
            }
        </div >
    );
};

export default ITRForm;
