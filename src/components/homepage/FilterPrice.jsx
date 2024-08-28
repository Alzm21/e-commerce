import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/filterprice.css'
import { FaAngleDown } from "react-icons/fa";


const FilterPrice = () => {

    const {handleSubmit, register, reset} = useForm()
    
    const submit = data => {
        console.log(data)
        reset({
            form: '',
            to: '',
        })
    }
  return (
    <>
        <div className='price_drop-down'>
            <div className='price_header'>
                Price
                <button className='drop-down_btn'><FaAngleDown /></button>
            </div>
            <div className='drop-down_container'>
                <form className='filterprice' onSubmit={handleSubmit(submit)}>
                    <label className='filterprice_item'>
                        <span>From</span>
                        <input {...register('from')} id="from" type='text' />
                    </label>
                    <label className='filterprice_item'>
                        <span>To</span>
                        <input {...register('to')} id="to" type='text' />
                    </label>
                    <button className='filterprice_btn'>Filter Price</button>
                </form> 
            </div>
        </div>
    </>
  )
}

export default FilterPrice