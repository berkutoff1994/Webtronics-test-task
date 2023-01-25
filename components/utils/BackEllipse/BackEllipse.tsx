import React, { FC } from 'react'
import Image from 'next/image'

interface IBackEllipseProps {
  top?: string,
  bottom?: string,
  right?: string,
  left?: string,
}

const BackEllipse:FC<IBackEllipseProps> = (props) => {
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
        style={{background: '#2A3E84', filter: 'blur(175px)'}} 
        alt='background' 
        src='/back-ellipse.png' 
        width='356' 
        height='356' />
    </div>
  )
}

export default BackEllipse