/* eslint-disable max-len */
import React from 'react'

function Icon({ type }) {
  if (type === 'money') {
    return (
      <svg width='39' height='50' viewBox='0 0 39 45' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M32.0724 38.4375H6.496C4.73762 38.4375 3.29895 36.75 3.29895 34.6875V15.0938C3.29895 13.875 3.77851 12.75 4.6577 12L19.2842 0L33.9107 12C34.7899 12.6563 35.2695 13.875 35.2695 15.0938V34.6875C35.2695 36.75 33.8308 38.4375 32.0724 38.4375Z' fill='#78909C' />
        <path d='M27.2769 0.9375H11.2916V30H27.2769V0.9375Z' fill='#AED581' />
        <path d='M10.4923 0V30.9375H28.0761V0H10.4923ZM26.4776 29.0625H12.0908V1.875H26.4776V29.0625Z' fill='#558B2F' />
        <path d='M27.2768 2.8125C27.2768 4.40625 27.037 5.625 25.6783 5.625C24.3196 5.625 23.2805 4.40625 23.2805 2.8125C23.2805 1.21875 24.3196 0.9375 25.6783 0.9375C27.037 0.9375 27.2768 1.21875 27.2768 2.8125Z' fill='#558B2F' />
        <path d='M12.8902 0.9375C14.2489 0.9375 15.2879 1.21875 15.2879 2.8125C15.2879 4.40625 14.2489 5.625 12.8902 5.625C11.5314 5.625 11.2916 4.40625 11.2916 2.8125C11.2916 1.21875 11.5314 0.9375 12.8902 0.9375Z' fill='#558B2F' />
        <path d='M19.2842 9.375C20.167 9.375 20.8827 8.53553 20.8827 7.5C20.8827 6.46447 20.167 5.625 19.2842 5.625C18.4014 5.625 17.6857 6.46447 17.6857 7.5C17.6857 8.53553 18.4014 9.375 19.2842 9.375Z' fill='#558B2F' />
        <path d='M19.2842 24.375C21.9327 24.375 24.0798 21.8566 24.0798 18.75C24.0798 15.6434 21.9327 13.125 19.2842 13.125C16.6357 13.125 14.4886 15.6434 14.4886 18.75C14.4886 21.8566 16.6357 24.375 19.2842 24.375Z' fill='#558B2F' />
        <path d='M32.0724 38.4375H6.496C4.73762 38.4375 3.29895 36.75 3.29895 34.6875V15.9375L19.2842 28.125L35.2695 15.9375V34.6875C35.2695 36.75 33.8308 38.4375 32.0724 38.4375Z' fill='#CFD8DC' />
      </svg>
    )
  }
  if (type === 'card') {
    return (
      <svg width='43' height='50' viewBox='0 0 43 50' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0)'>
          <path d='M37.7232 39.2771L4.35103 34.376C3.38143 34.2336 2.6939 33.1962 2.81528 32.0588L5.17394 9.96192C5.29533 8.82461 6.17976 8.01807 7.14945 8.16045L40.5216 13.0616C41.4912 13.204 42.1787 14.2415 42.0573 15.3788L39.6986 37.4757C39.5772 38.613 38.6928 39.4195 37.7232 39.2771Z' fill='#3F5EAB' />
          <path d='M36.4899 41.8559H2.85726C1.88008 41.8559 1.08789 40.9266 1.08789 39.7805V17.5109C1.08789 16.3648 1.88008 15.4357 2.85726 15.4357H36.4899C37.4671 15.4357 38.2593 16.3649 38.2593 17.5109V39.7805C38.2593 40.9266 37.4671 41.8559 36.4899 41.8559Z' fill='url(#paint0_linear)' />
          <path d='M14.6138 35.2052C15.6852 35.2052 15.687 33.2521 14.6138 33.2521C11.7079 33.2521 5.0565 33.2521 4.63681 33.2521C3.56538 33.2521 3.56363 35.2052 4.63681 35.2052C4.63681 35.2052 14.1941 35.2052 14.6138 35.2052Z' fill='white' />
          <path d='M17.5 35.2052C18.1825 35.2052 18.865 35.2052 19.5475 35.2052C20.6189 35.2052 20.6207 33.2521 19.5475 33.2521C18.865 33.2521 18.1825 33.2521 17.5 33.2521C16.4286 33.2521 16.4269 35.2052 17.5 35.2052Z' fill='white' />
          <path d='M27.3423 38.2236C29.0598 38.2236 30.4522 36.5904 30.4522 34.5758C30.4522 32.5611 29.0598 30.9279 27.3423 30.9279C25.6247 30.9279 24.2323 32.5611 24.2323 34.5758C24.2323 36.5904 25.6247 38.2236 27.3423 38.2236Z' fill='url(#paint1_linear)' />
          <path d='M32.3654 38.2236C34.083 38.2236 35.4754 36.5904 35.4754 34.5758C35.4754 32.5611 34.083 30.9279 32.3654 30.9279C30.6478 30.9279 29.2554 32.5611 29.2554 34.5758C29.2554 36.5904 30.6478 38.2236 32.3654 38.2236Z' fill='#3F5EAB' />
          <path d='M1.08788 24.3368C2.32374 24.3368 38.0775 24.3975 38.1967 24.3368C38.2115 24.3293 38.2422 24.3368 38.2593 24.3368C38.2746 24.3368 38.2751 21.8954 38.2593 21.8954C37.0235 21.8954 1.26971 21.8348 1.15049 21.8954C1.13567 21.9029 1.10495 21.8954 1.08788 21.8954C1.07264 21.8954 1.07206 24.3368 1.08788 24.3368Z' fill='white' />
        </g>
        <defs>
          <linearGradient id='paint0_linear' x1='5.2679' y1='45.543' x2='38.637' y2='17.0943' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#00FFFF' />
            <stop offset='1' stopColor='#FF7BAC' />
          </linearGradient>
          <linearGradient id='paint1_linear' x1='24.2323' y1='34.5757' x2='30.4522' y2='34.5757' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#B3B3B3' />
            <stop offset='0.0161' stopColor='#B7B7B7' />
            <stop offset='0.152' stopColor='#D1D1D1' />
            <stop offset='0.3016' stopColor='#E5E5E5' />
            <stop offset='0.4698' stopColor='#F4F4F4' />
            <stop offset='0.6721' stopColor='#FCFCFC' />
            <stop offset='1' stopColor='white' />
          </linearGradient>
          <clipPath id='clip0'><rect width='42.6273' height='50' fill='white' transform='translate(0.260071)' /></clipPath>
        </defs>
      </svg>
    )
  }
  if (type === 'paypal') {
    return (
      <svg width='44' height='50' viewBox='0 0 44 50' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M17.4353 14.3406L17.4398 14.3427C17.5321 13.8812 17.8678 13.5417 18.2879 13.5417H30.2519C30.267 13.5417 30.2821 13.5344 30.2972 13.5354C30.0424 8.55729 26.4821 6.25 23.341 6.25H11.3769C10.956 6.25 10.6203 6.59896 10.5288 7.05937L10.5244 7.05729L5.29451 35.2219L5.30606 35.2229C5.29363 35.2896 5.27142 35.3531 5.27142 35.425C5.27142 36.001 5.66839 36.4573 6.15949 36.4573H13.3271L17.4353 14.3406Z' fill='#1565C0' />
        <path d='M30.2972 13.5354C30.3443 14.4479 30.2928 15.4406 30.0939 16.5375C28.9563 22.7823 24.8436 26.0323 19.7612 26.0323C19.7612 26.0323 16.6796 26.0323 15.9309 26.0323C15.4683 26.0323 15.2498 26.351 15.1494 26.5948L13.6042 34.9792L13.3333 36.4677H13.328L12.2064 42.5052L12.2179 42.5063C12.2055 42.5729 12.1833 42.6365 12.1833 42.7083C12.1833 43.2844 12.5803 43.75 13.0714 43.75H19.5836L19.5951 43.7396C20.0143 43.7323 20.3473 43.3813 20.4343 42.9188L20.4503 42.9031L22.0595 34.1365C22.0595 34.1365 22.1714 33.3 22.9209 33.3C23.6705 33.3 26.6313 33.3 26.6313 33.3C31.7137 33.3 35.8681 30.0646 37.0066 23.8187C38.2872 16.7771 34.0049 13.5615 30.2972 13.5354Z' fill='#039BE5' />
        <path d='M18.2879 13.5417C17.8669 13.5417 17.5313 13.8812 17.4398 14.3427L17.4353 14.3406L15.1486 26.5958C15.2489 26.3521 15.4674 26.0333 15.9301 26.0333C16.6796 26.0333 19.691 26.0333 19.691 26.0333C24.7735 26.0333 28.9554 22.7833 30.093 16.5385C30.2928 15.4417 30.3434 14.449 30.2964 13.5365C30.2822 13.5344 30.2662 13.5417 30.252 13.5417H18.2879Z' fill='#283593' />
      </svg>
    )
  }
}

export default Icon
