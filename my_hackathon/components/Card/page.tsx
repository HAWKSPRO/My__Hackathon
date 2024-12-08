import React from 'react'
import Image from 'next/image'
import product_colors from "@/public/product-colors.svg"
interface CardTypes {
    image: any;
    img_w: number;
    img_h: number;
    main_w: number;
    main_h: number;
    card_w: number;
    card_h: number;
}
const Card = ({ card_w, card_h, image, img_w, img_h, main_w, main_h }: CardTypes) => {
    return (
        <div style={{width: `${card_w}px`, height: `${card_h}px`}}>
            <Image
                src={image}
                alt='card image'
                width={img_w}
                height={img_h}
            >
            </Image>
            <div style={{ width: `${main_w}px`, height: `${main_h}px` }} className='flex flex-col gap-[10px] justify-center items-center'>
                <h5 className='font-bold text-[16px] '>Graphic Design</h5>
                <p className='font-bold text-[14px] text-[#737373] '>English Department</p>
                <div className='flex gap-[5px]'>
                    <p className='text-[16px] text-[#737373]'>$16.48</p>
                    <p className='text-[#23856D]'>$6.48</p>
                </div>
                <Image
                    src={product_colors}
                    alt='product colors'
                    width={82.23}
                    height={16}
                >
                </Image>
            </div>

        </div>
    )
}

export default Card
