import React from 'react'
import Image from 'next/image';
interface ShopCardTypes{
    width: number;
    height: number;
    image: any;
}
const ShopCard = ({width, height, image}:ShopCardTypes) => {
  return (
    <div style={{width:`${width}px`, height: `${height}px`}} >
        <Image
            src={image}
            alt='shop card image'
            width={width}
            height={height}
        >
        </Image>
    </div>
  )
}

export default ShopCard
