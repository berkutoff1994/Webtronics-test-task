import React, { FC } from 'react'
import Image from 'next/image'

interface IBackStarProps {
  top?: string,
  bottom?: string,
  right?: string,
  left?: string,
  width: number,
  height: number
}

const BackStar:FC<IBackStarProps> = (props) => {
  return (
    <div style={{
      position: 'absolute',
      top: `${props.top}`,
      bottom: `${props.bottom}`,
      right: `${props.right}`,
      left: `${props.left}`,
      zIndex: '10000',
      }}>
      <Image 
        // style={{background: '#2A3E84', filter: 'blur(175px)'}} 
        alt='background' 
        src='/star.png' 
        width={props.width} 
        height={props.height} />
    </div>
  )
}

export default BackStar