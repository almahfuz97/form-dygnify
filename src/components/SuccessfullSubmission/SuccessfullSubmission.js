import React from 'react'

export default function ({ setStep }) {
    return (
        <div className=' flex flex-col justify-center items-center'>
            <h3 className=' md:text-2xl text-base text-green-500'>Submission Successfull</h3>
            <button className='p-3 uppercase font-bold text-purple-400 mt-4 hover:text-green-400 rounded-lg shadow' onClick={() => setStep(0)}>Go Home</button>
        </div>
    )
}
