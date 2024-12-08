import React from 'react'
interface ButtonTypes{
    width: number;
    height?: number;
    text: string;
    bg_color: string;
    color?: string;
    className?: string
}
const Button = ({width, height, text, color, bg_color, className}:ButtonTypes) => {
  return (
    <div>
      <button style={{ width: `${width}px`, height: height ? `${height}px` : 'auto', backgroundColor: bg_color,color: color? color :'auto' }} className={className}>{text}</button>
    </div>
  )
}

export default Button
