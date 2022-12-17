import React, { useState } from 'react'
import BusinessDetails from '../BuisnessDetails/BusinessDetails';
import LoanDetails from '../LoanDetails/LoanDetails';
import PersonalDetails from '../PersonalDetails/PersonalDetails'
import SuccessfullSubmission from '../SuccessfullSubmission/SuccessfullSubmission';
import arrow from '../../assets/arrow.png'


export default function Form() {
    const [step, setStep] = useState(0);
    const formTitles = ['Personal Details', 'Business Details', 'Loan Details',];

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        buisnessName: '',
        gst: '',
        buisnessAddress: '',
        businessContact: '',
        loanAmount: '',
        loanInterest: '',
        loanTenure: '',
        age: ''
    })

    const currentForm = () => {
        if (step === 0) {
            return <PersonalDetails setStep={setStep} formData={formData} setFormData={setFormData} />
        }
        else if (step === 1) return <BusinessDetails setStep={setStep} formData={formData} setFormData={setFormData} />
        else if (step === 2) return <LoanDetails setStep={setStep} formData={formData} setFormData={setFormData} />
        else if (step === 3) return <SuccessfullSubmission setStep={setStep} />
    }

    return (
        <div className=' p-8 w-full  flex justify-center '>
            <div className='md:w-[30%] w-[85%] border p-8 rounded-lg shadow'>
                <div>
                    <h2 className=' text-center mb-12 font-bold text-2xl text-purple-400'>Loan Application Form</h2>
                </div>
                <div className='relative my-8 '>
                    <ul className=' flex justify-between'>
                        <li className={`rounded-full ${step >= 0 ? 'bg-green-400' : 'bg-slate-400'} text-white px-2`}>1</li>
                        <li className={`rounded-full ${step >= 1 ? 'bg-green-400' : 'bg-slate-400'}  text-white px-2`}>2</li>
                        <li className={`rounded-full ${step >= 2 ? 'bg-green-400' : 'bg-slate-400'}  text-white px-2`}>3</li>
                        <li className={`rounded-full ${step === 3 ? 'bg-green-400' : 'bg-slate-400'}  text-white px-2`}>4</li>
                    </ul>
                    <div className={`h-1  -z-10 w-[33.3%] ${step > 0 ? 'bg-green-400' : 'bg-gray-400'} absolute top-1/2`}></div>
                    <div className={`h-1  -z-10 w-[33.3%] ${step > 1 ? 'bg-green-400' : 'bg-gray-400'} left-[33.3%] absolute top-1/2`}></div>
                    <div className={`h-1  -z-10 w-[33.3%] ${step > 2 ? 'bg-green-400' : 'bg-gray-400'} left-[66.6%] absolute top-1/2`}></div>
                </div>
                <div className=' flex items-center gap-1'>
                    <img src={arrow} alt="" className=' cursor-pointer ' hidden={step === 0 || step === 3} onClick={() => setStep((prev) => prev - 1)} /> <h3 className=' uppercase font-bold text-purple-400'>{formTitles[step]}</h3>
                </div>
                <div>
                    {
                        currentForm()
                    }
                </div>
                <div className=' flex'>


                </div>
            </div>
        </div >
    )
}
