import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchasesThunk } from '../store/slices/purchases.slice'
import PurchasesCard from '../components/purchases/PurchasesCard'
import './styles/purchases.css'

const Purchases = () => {

  const purchases = useSelector(store => store.purchases)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPurchasesThunk())
  }, [])

  return (
    <div>
      {
        purchases.map(prod => (
          <PurchasesCard
            key={prod.id}
            prod={prod}
          />
        ))
      }
    </div>
  )
}

export default Purchases