import React, { FC } from 'react'

interface INextProps {
  onNext: (e: any) => void
}

const Next:FC<INextProps> = ({onNext}) => {
  return (
    <svg onClick={onNext} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="white" fill-opacity="0.05"/>
      <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="url(#paint0_linear_1325_178)" stroke-opacity="0.7"/>
      <path d="M16 29.5L25.5 20L16 10.5" stroke="white"/>
      <defs>
      <linearGradient id="paint0_linear_1325_178" x1="4.4" y1="3.76528" x2="27.1452" y2="46.795" gradientUnits="userSpaceOnUse">
      <stop stop-color="#15BFFD"/>
      <stop offset="1" stop-color="#9C37FD"/>
      </linearGradient>
      </defs>
    </svg>
  )
}

export default Next