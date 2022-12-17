import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export default function BusinessDetails({ formData, setFormData, setStep }) {
    const { register, watch, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        setFormData(prev => ({
            ...prev,
            businessName: watch('businessName'),
            gst: watch('gst'),
            buisnessAddress: watch('buisnessAddress'),
            businessContact: watch('businessContact'),
        }))

    }, [watch('businessName'), watch('gst'), watch('buisnessAddress'), watch('businessContact')])

    const onSubmit = data => {
        console.log(data)
        setFormData(prev => (
            {
                ...prev,
                data
            }
        ))
        setStep(prev => prev + 1);

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input value={formData.businessName} type="text" {...register('businessName', { required: 'First Name is required' })}
                    placeholder='Company Name'
                    className='border w-full p-2 rounded-lg drop-shadow-sm shadow-purple-400 shadow-sm mt-4'
                />
                <div>
                    {
                        errors.businessName && <p className='mt-1 text-red-400 text-xs'>{errors.businessName?.message}</p>
                    }
                </div>

                <input value={formData.gst} type="number" {...register('gst', { required: 'Last Name is required' })}
                    placeholder='GST'
                    className='border w-full p-2 rounded-lg drop-shadow-sm shadow-purple-400 shadow-sm mt-4'
                />
                <div>
                    {
                        errors.gst && <p className='mt-1 text-red-400 text-xs'>{errors.gst?.message}</p>
                    }

                </div>
                <input value={formData.buisnessAddress} type="text" {...register('buisnessAddress', { required: 'This field is required' })}
                    placeholder='Location'
                    className='border w-full p-2 rounded-lg drop-shadow-sm shadow-purple-400 shadow-sm mt-4'
                />
                <div>
                    {
                        errors.buisnessAddress && <p className='mt-1 text-red-400 text-xs'>{errors.buisnessAddress?.message}</p>
                    }</div>

                <input value={formData.businessContact} type="number" {...register('businessContact', { required: 'Phone number is required' })}
                    placeholder='Contact Number'
                    className='border w-full p-2 rounded-lg drop-shadow-sm shadow-purple-400 shadow-sm mt-4'
                />
                <div>
                    {
                        errors.businessContact && <p className='mt-1 text-red-400 text-xs'>{errors.businessContact?.message}</p>
                    }</div>


                <input type="submit" value='Next'
                    className='border w-full p-2 rounded-lg text-purple-400 drop-shadow-sm shadow-purple-400 shadow-sm mt-4 cursor-pointer' />
            </form>
        </div>
    )
}
