import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import { Swiper as MySwiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper/core'
import 'swiper/swiper-bundle.min.css'
import ArrowButton from './arrows'
import theme from '../../../theme'

SwiperCore.use([ Navigation ])

function Swiper() {
  const [ screenWidth, setScreenWidth ] = useState(1)

  function handleResize() {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function setSlidesPerView() {
    const { breakpoints } = theme
    const breakpointsValues = Object.values(breakpoints).reverse()
    const currentBreakpointValue = breakpointsValues.find(
      value => value < screenWidth
    )
    const breakpointsNames = Object.entries(breakpoints)
    const currentBreakpointName = breakpointsNames.find(
      entry => entry[1] === currentBreakpointValue
    )[0]

    switch (currentBreakpointName) {
    case 'xs': return 1
    case 'sm': return 1
    case 'md': return 2
    case 'lg': return 2
    case 'xl': return 3
    default: return 1
    }
  }

  function setSpaceBetween() {
    switch (setSlidesPerView()) {
    case 1: return 10
    case 2: return 20
    case 3: return 30
    default: return 10
    }
  }

  return (
    <MySwiper
      spaceBetween={setSpaceBetween()}
      slidesPerView={setSlidesPerView()}
      navigation
    >
      <ArrowButton direction='prev' />
      <ArrowButton direction='next' />
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
      <SwiperSlide>
        <img src='https://via.placeholder.com/640x480' alt='placeholder' />
      </SwiperSlide>
    </MySwiper>
  )
}

export default Swiper
