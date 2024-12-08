import React from 'react'
import Image from 'next/image';
import post_card_img_l from "@/public/post_card_img_l.svg"
import post_card_img_r from "@/public/post_card_img_r.svg"
import post_card_img_d from "@/public/post_card_img_d.svg"
interface PostCardType {
    image: any;
}
const PostCard = ({ image }: PostCardType) => {
    return (
        <div className='flex flex-col gap-[10px] w-[328px] h-[606px]'>
            <Image
                src={image}
                alt='post card image'
                width={348}
                height={300}
            >
            </Image>
            <div>
                <ul className='flex gap-[15px]'>
                    <li className='text-[#8EC2F2] text-[12px]'>Google</li>
                    <li className='text-[12px]'>Trending</li>
                    <li className='text-[12px]'>New</li>
                </ul>
            </div>
            <div>
                <h4 className='font-bold text-[20px] text-[#252B42]'>Loudest à la Madison #1 <br />
                    (L'integral)</h4>
                <p className='text-[#737373] text-[14px]'>We focus on ergonomics and meeting <br />
                    you where you work. It's only a <br />
                    keystroke away.</p>
            </div>
            <div className='w-[298px] flex justify-between items-center'>
                <Image
                    src={post_card_img_l}
                    alt='post card image'
                    width={98}
                    height={16}
                >
                </Image>
                <Image
                    src={post_card_img_r}
                    alt='post card image'
                    width={98}
                    height={16}
                >
                </Image>
            </div>
            <div>
                <Image
                    src={post_card_img_d}
                    alt='post card image'
                    width={104}
                    height={24}
                >
                </Image>
            </div>
        </div>
    )
}

export default PostCard
