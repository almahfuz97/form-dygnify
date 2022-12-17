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
                <input value={formData.businessName} type="text" {...register('businessName', { required: 'First Name is required' })} />
                {
                    errors.businessName && <p>{errors.businessName?.message}</p>
                }
                <br />
                <input value={formData.gst} type="number" {...register('gst', { required: 'Last Name is required' })} />
                {
                    errors.gst && <p>{errors.gst?.message}</p>
                }
                <br />
                <input value={formData.buisnessAddress} type="text" {...register('buisnessAddress', { required: 'This field is required' })} />
                {
                    errors.buisnessAddress && <p>{errors.buisnessAddress?.message}</p>
                }
                <br />
                <input value={formData.businessContact} type="number" {...register('businessContact', { required: 'Phone number is required' })} />
                {
                    errors.businessContact && <p>{errors.businessContact?.message}</p>
                }
                <br />


                <input type="submit" value='Submit' />
            </form>
        </div>
    )
}
