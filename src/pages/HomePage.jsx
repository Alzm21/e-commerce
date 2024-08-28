import React, { useEffect, useRef, useState} from 'react'
import useFetch from '../hooks/useFetch'
import ProdCart from '../components/homepage/ProdCart'
import './styles/homePage.css'
import FilterPrice from '../components/homepage/FilterPrice'
import FilterCategory from '../components/homepage/FilterCategory'
import { VscSearch } from "react-icons/vsc";


const body = document.querySelector('body')

const HomePage = () => {

  const [prodCategory, setProdCategory] = useState('')
  const [products, getProducts] = useFetch()
  const [prodName, setProdName] = useState('')
  const [prodPrice, setProdPrice] = useState({
    from: 0,
    to: Infinity
  })
    
    
    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
        getProducts(url)
    }, [])

  const textInput = useRef()

  const handleChange = () => {
    setProdName(textInput.current.value.toLowerCase().trim())
  }

  const prodFilters = (prod) => {
    const perName = prod.title.toLowerCase().includes(prodName)
    const perPrice = +prod.price <= +prodPrice.to && +prod.price >= +prodPrice.from
    const perCategory = prodCategory ? prod.categoryId === +prodCategory : prod
    return perName && perPrice && perCategory
  }

  const handleDark = () => {
    body.classList.toggle('dark')
  }

  return (
    <div className='homepage'>
        <div className='homepage_filters'>
          <FilterPrice
            setProdPrice = {setProdPrice}
          />
          <FilterCategory
            setProdCategory = {setProdCategory}
          />
          <button className='homepage_btn' onClick={handleDark}> Mode</button>
        </div>
        <div className='container'>
          <div className='homepage_container'>
            <div className='search_box'>
              <form className='input'>
                <input ref={textInput} onChange={handleChange} type='text' placeholder='What product are you looking for?'/>
                <button className='search_btn'><VscSearch /></button>
              </form>
            </div>
            <div className='product_cards'>
              {
                products?.filter(prodFilters).map((prod) => (
                  <ProdCart
                    key={prod.id}
                    prod={prod}
                  />
                ))
              }
            </div>
          </div>
      </div>
    </div>
  )
}

export default HomePage