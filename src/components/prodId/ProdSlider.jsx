import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import './styles/prodslider.css'

const ProdSlider = ({product}) => {

  return (
    <Splide
      options={ {
        rewind: true,
        gap   : '1rem',
      } }
      aria-label="My Favorite Images"
    >
        {
            product?.images.map(img => (
                <SplideSlide key={img.id}>
                    <img src={img.url} alt="Image 1"/>
                </SplideSlide>

            ))
        }
    </Splide>
  )
}

export default ProdSlider