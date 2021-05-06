import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import { Swiper as MySwiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper/core'
import Container from '../container'
import theme from '../../../theme'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([ Navigation ])

const ArrowButtonStyled = styled.div`
  color: ${ theme.color.primary.light };
`

function ArrowButton({ direction }) {
  return <ArrowButtonStyled className={`swiper-button-${ direction }`} />
}

function Swiper() {
  return (
    <Container tag='section'>
      <MySwiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>
          <img src='https://via.placeholder.com/640x480' alt='placeholder' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://via.placeholder.com/640x480' alt='placeholder' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://via.placeholder.com/640x480' alt='placeholder' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://via.placeholder.com/640x480' alt='placeholder' />
        </SwiperSlide>
        {/* <ArrowButton direction='prev' />
        <ArrowButton direction='next' /> */}
      </MySwiper>
    </Container>
  )
}

export default Swiper
