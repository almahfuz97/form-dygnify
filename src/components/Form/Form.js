import React, { useState } from 'react'
import BusinessDetails from '../BuisnessDetails/BusinessDetails';
import LoanDetails from '../LoanDetails/LoanDetails';
import PersonalDetails from '../PersonalDetails/PersonalDetails'
import SuccessfullSubmission from '../SuccessfullSubmission/SuccessfullSubmission';


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

    const handleNext = () => {
        setStep(prev => prev + 1)
    }
    return (
        <div className=' p-8 w-full border flex justify-center '>
            <div className='md:w-[30%] w-[85%] border p-8 rounded-lg shadow'>
                <div>
                    {formTitles[step]}
                </div>
                <div>
                    {
                        currentForm()
                    }
                </div>
                <div className=' flex'>
                    <button disabled={step === 0} onClick={() => setStep((prev) => prev - 1)} >
                        Back
                    </button>

                </div>
            </div>
        </div>
    )
}
