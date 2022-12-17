import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
export default function LoanDetails({ formData, setFormData, setStep }) {
    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false)

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

        setLoading(true)
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
                    setLoading(false)
                }
            })
            .catch(err => {
                console.log(err)
                setLoading(false)

            })
        console.log(formData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input value={formData.loanAmount} type="number" {...register('loanAmount', { required: 'This field is required' })}
                    placeholder='Amount'
                    className='border w-full p-2 rounded-lg drop-shadow-sm shadow-purple-400 shadow-sm mt-4'
                />
                <div>


                    {
                        errors.loanAmount && <p className='mt-1 text-red-500 text-xs'>{errors.loanAmount?.message}</p>
                    }
                </div>
                <input value={formData.loanInterest} type="number" {...register('loanInterest', { required: 'This field required' })}
                    placeholder='Interest rate'
                    className='border w-full p-2 rounded-lg drop-shadow-sm shadow-purple-400 shadow-sm mt-4'
                />
                <div>


                    {
                        errors.loanInterest && <p className='mt-1 text-red-500 text-xs'>{errors.loanInterest?.message}</p>
                    }
                </div>
                <input value={formData.loanTenure} type="number" {...register('loanTenure', { required: 'Tenure is required' })}
                    placeholder='Tenure (month)'
                    className='border w-full p-2 rounded-lg drop-shadow-sm shadow-purple-400 shadow-sm mt-4'
                />
                <div>


                    {
                        errors.loanTenure && <p className='mt-1 text-red-500 text-xs'>{errors.loanTenure?.message}</p>
                    }</div>


                {
                    loading ? <div className=' flex justify-center'>
                        <input disabled value='Loading...'
                            className='border w-full p-2 rounded-lg drop-shadow-sm shadow-purple-400 shadow-sm mt-4 cursor-pointer hover:text-green-500 font-bold uppercase text-purple-400 text-center' />
                    </div> :
                        <input type="submit" value='Finish'
                            className='border w-full p-2 rounded-lg drop-shadow-sm shadow-purple-400 shadow-sm mt-4 cursor-pointer hover:text-green-500 font-bold uppercase text-purple-400 text-center' />
                }
            </form>
        </div>
    )
}
