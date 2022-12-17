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
        <div className=''>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input placeholder='First Name' value={formData.firstName} type="text" {...register('firstName', { required: 'First Name is required' })}
                    className='border w-full p-2 rounded-lg drop-shadow-sm shadow-purple-400 mt-2 shadow-sm'
                />
                <div>
                    {
                        errors.firstName && <p className=' mt-1 text-red-400 text-xs'>{errors.firstName?.message}</p>
                    }</div>
                <input placeholder='Last Name' value={formData.lastName} type="text" {...register('lastName', { required: 'Last Name is required' })}
                    className='border w-full p-2 rounded-lg drop-shadow-sm shadow-purple-400 mt-2 shadow-sm'
                />
                <div>
                    {
                        errors.lastName && <p className=' mt-1 text-red-400 text-xs'>{errors.lastName?.message}</p>
                    }</div>
                <input placeholder='Email' value={formData.email} type="email" {...register('email', { required: 'Email is required' })}
                    className='border w-full p-2 rounded-lg drop-shadow-sm shadow-purple-400 mt-2 shadow-sm'
                />
                <div>
                    {
                        errors.email && <p className=' mt-1 text-red-400 text-xs'>{errors.email?.message}</p>
                    }</div>
                <input placeholder='Cell Number' value={formData.mobile} type="number" {...register('mobile', { required: 'Phone number is required' })}
                    className='border w-full p-2 rounded-lg drop-shadow-sm shadow-purple-400 mt-2 shadow-sm'
                />
                <div>
                    {
                        errors.mobile && <p className=' mt-1 text-red-400 text-xs'>{errors.mobile?.message}</p>
                    }</div>
                <input placeholder='Age' value={formData.age} type="number" {...register('age', { required: 'Age is required' })}
                    className='border w-full p-2 rounded-lg drop-shadow-sm shadow-purple-400 mt-2 shadow-sm'
                />
                <div>
                    {
                        errors.age && <p className=' mt-1 text-red-400 text-xs'>{errors.age?.message}</p>
                    }</div>

                <div className=' flex justify-center'>
                    <input type="submit" value='Next' className='border cursor-pointer hover:text-green-400 font-bold text-purple-400 w-full p-2 rounded-lg drop-shadow-sm shadow-purple-400 shadow-sm mt-2 text-center ' />
                </div>
            </form>
        </div>
    )
}
