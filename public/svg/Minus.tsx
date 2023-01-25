import React, { FC } from 'react'

interface IMunusProps {
  openTab: (e: any) => void
}

const Minus: FC<IMunusProps> = ({openTab}) => {
  return (
    <svg onClick={openTab} width="26" height="13" viewBox="0 0 16 3" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.5C0 0.947715 0.447715 0.5 1 0.5H15C15.5523 0.5 16 0.947715 16 1.5C16 2.05228 15.5523 2.5 15 2.5H1C0.447715 2.5 0 2.05228 0 1.5Z" fill="white"/>
    </svg>

  )
}

export default Minus