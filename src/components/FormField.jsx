import React, { useEffect, useRef, useState } from 'react'

export const FormField = ({labelLink, label, type, regex, error, formValidation}) => {
    const [inputValidation, setValidation] = useState(true);
    const [hasBeenActivated, setActivation] = useState(false);
    const validation = new RegExp(regex);

    const getValidation = () => {
      return inputValidation
    }

    const handleChange = (e) => {
        let inputValue = e.target.value;

        if(!validation.test(inputValue)){
            setValidation(false);
        }else{
            setValidation(true);
        }
      }

      const handleBlur = (e) => {
        setActivation(true);
      }

    return (
    <div className='formField'>
        <label htmlFor={labelLink}> {label} </label>
        <input
        type={type}
        id={labelLink}
        onChange={(e) => {handleChange(e)}}
        onBlur={(e) => {handleBlur(e)}}></input>
        {(!inputValidation && hasBeenActivated)? <p className='formError'> {error} </p> : <> </>}
</div>
  )
}
