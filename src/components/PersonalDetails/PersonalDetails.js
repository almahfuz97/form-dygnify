import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export default function PersonalDetails({ formData, setFormData, setStep }) {
    const { register, watch, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        setFormData(prev => ({
            ...prev,
            firstName: watch('firstName'),
            lastName: watch('lastName'),
            email: watch('email'),
            mobile: watch('mobile'),
            age: watch('age'),
        }))

    }, [watch('firstName'), watch('lastName'), watch('email'), watch('mobile'), watch('age')])

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
                <input value={formData.firstName} type="text" {...register('firstName', { required: 'First Name is required' })} />
                {
                    errors.firstName && <p>{errors.firstName?.message}</p>
                }
                <br />
                <input value={formData.lastName} type="text" {...register('lastName', { required: 'Last Name is required' })} />
                {
                    errors.lastName && <p>{errors.lastName?.message}</p>
                }
                <br />
                <input value={formData.email} type="email" {...register('email', { required: 'Email is required' })} />
                {
                    errors.email && <p>{errors.email?.message}</p>
                }
                <br />
                <input value={formData.mobile} type="number" {...register('mobile', { required: 'Phone number is required' })} />
                {
                    errors.mobile && <p>{errors.mobile?.message}</p>
                }
                <br />
                <input value={formData.age} type="number" {...register('age', { required: 'Age is required' })} />
                {
                    errors.age && <p>{errors.age?.message}</p>
                }
                <br />

                <input type="submit" value='Submit' />
            </form>
        </div>
    )
}
