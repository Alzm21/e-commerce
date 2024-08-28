import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import { FaAngleDown } from "react-icons/fa";
import './styles/filtercategory.css'

const FilterCategory = ({setProdCategory}) => {

    const [categories, getCategories] = useFetch()
    
    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'
        getCategories(url)
    }, [])
    
    const handleChange = (categoryId) => {
        setProdCategory(categoryId)
    }

  return (
    <>
        <div className='category_drop-down'>
            <div className='category_header'>
                Category
                <button className='drop-down_btn'><FaAngleDown /></button>
            </div>
            <div className='drop-down_container'>
                <div className='content'>
                    <ul className='filtercategory'>
                        <li>
                            <button onClick={() => handleChange(null)}>All categories</button>
                        </li>
                        { categories?.map(category => (
                            <li key={category.id}>
                                <button onClick={() => handleChange(category.id)}>{category.name}</button>
                            </li>         
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default FilterCategory