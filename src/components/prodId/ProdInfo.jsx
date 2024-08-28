import React, { useState } from 'react'
import './styles/prodinfo.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postCartThunk } from '../../store/slices/cart.slice'

const ProdInfo = ({product}) => {

  const [counter, setCounter] = useState(1)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleLess = () => {
    if (counter > 1) {
      setCounter(counter -1)
    }
  }
  const handlePlus = () => {
    setCounter(counter + 1)
  }
  const handleBuy = () => {
    dispatch(postCartThunk('cart', {
      quantity: counter,
      productId: product.id
    }))
    navigate('/cart')
  }

  return (
    <article className='prodinfo'>
        <h3 className='prodinfo_brand'>{product?.brand}</h3>
        <h2 className='prodinfo_title'>{product?.title}</h2>
        <p className='prodinfo_description'>{product?.description}</p>
        <div className='prodinfo_container'>
            <ul>
                <li className='prodinfo_price'><span>Price</span><span> ${product?.price}</span></li>
            </ul>
            <div className='prodinfo_counter'>
              <p>Quantity</p>
              <div className='counter_container'>
                <button onClick={handleLess} className='prodinfo_btnless'>-1</button>
                <span >{counter}</span>
                <button onClick={handlePlus} className='prodinfo_btnplus'>+1</button>
              </div>
            </div>
        </div>
        <button onClick={handleBuy} className='prodinfo_addcart'>Add to cart</button>
    </article>
  )
}

export default ProdInfo