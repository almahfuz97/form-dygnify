import React from 'react'

export default function ({ setStep }) {
    return (
        <div>
            <h1>Successfull submission</h1>
            <button onClick={() => setStep(0)}>Resubmit</button>
        </div>
    )
}
