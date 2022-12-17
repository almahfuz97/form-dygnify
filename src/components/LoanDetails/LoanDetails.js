import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
export default function LoanDetails({ formData, setFormData, setStep }) {
    const { register, watch, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        setFormData(prev => ({
            ...prev,
            loanAmount: watch('loanAmount'),
            loanInterest: watch('loanInterest'),
            loanTenure: watch('loanTenure'),
        }))

    }, [watch('loanAmount'), watch('loanInterest'), watch('loanTenure')])

    const onSubmit = data => {
        console.log(data)
        setFormData(prev => (
            {
                ...prev,
                data
            }
        ))
        // setStep(prev => prev + 1);

        fetch('https://form-dygnify-server.vercel.app/formData', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    setStep(prev => prev + 1);
                    setFormData({
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
                }
            })
            .catch(err => {
                console.log(err)

            })
        console.log(formData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input value={formData.loanAmount} type="number" {...register('loanAmount', { required: 'This field is required' })} />
                {
                    errors.loan && <p>{errors.loan?.message}</p>
                }
                <br />
                <input value={formData.loanInterest} type="number" {...register('loanInterest', { required: 'This field required' })} />
                {
                    errors.interest && <p>{errors.interest?.message}</p>
                }
                <br />
                <input value={formData.loanTenure} type="number" {...register('loanTenure', { required: 'Tenure is required' })} />
                {
                    errors.loanTenure && <p>{errors.loanTenure?.message}</p>
                }
                <br />

                <input type="submit" value='Submit' />
            </form>
        </div>
    )
}
