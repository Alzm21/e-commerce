import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import ProdCart from '../homepage/ProdCart'
import './styles/prodisimilar.css'

const ProdSimilar = ({product}) => {

    const [sameProducts, getSameProducts] = useFetch()

    useEffect(() => {
      if (product) {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${product.categoryId}`
        getSameProducts(url)
      }
    }, [product])
    
    const sameFilter = (prod) => {
        return prod.id !== product.id
      }

  return (
    <article className='prodsimilar'>
        <h2 className='prodsimilar_title' >Discover Similar Products</h2>
            <div className='prodsimilar_container'>
                {
                    sameProducts?.filter(sameFilter).map(prod => (
                        <ProdCart
                            key={prod.id}
                            prod={prod}
                        />
                    ))
                }
            </div>
    </article>
  )
}

export default ProdSimilar