import React from 'react'
import social_media from "@/public/social media.svg"
import bandage from "@/public/Bandage.svg"
import Image from 'next/image'
import Button from '../Button/page'
const Footer = () => {
    return (
        <div className='w-screen h-[1342px] lg:h-[488px]'>
            <div className='ml-[22px] mb-[40px] lg:flex lg:justify-between lg:ml-[53px]'>
                <div className='w-[236px] h-[58px]'>
                    <Image
                        src={bandage}
                        alt='logo'
                        width={108}
                        height={32}
                    >
                    </Image>
                </div>
                <div className='w-[243px] h-[24]'>
                    <Image
                        src={social_media}
                        alt='social media'
                        width={112}
                        height={24}
                    >
                    </Image>
                </div>
            </div>
            <div className='flex flex-col  ml-[50px] max-lg:items-center lg:flex-row lg:gap-[30px]'>
                <div className='flex items-center w-screen mb-[30px] '>
                    <ul className='flex flex-col gap-[20px]'>
                        <li className='font-bold text-[16px] text-black'>Company Info</li>
                        <li className='text-[14px] text-[#737373]'>About Us</li>
                        <li className='text-[14px] text-[#737373]'>Carrier</li>
                        <li className='text-[14px] text-[#737373]'>We are hiring</li>
                        <li className='text-[14px] text-[#737373]'>Blog</li>
                    </ul>
                </div>

                <div className='flex items-center w-screen mb-[30px]'>
                    <ul className='flex flex-col gap-[20px]'>
                        <li className='font-bold text-[16px] text-black'>Legal</li>
                        <li className='text-[14px] text-[#737373]'>About Us</li>
                        <li className='text-[14px] text-[#737373]'>Carrier</li>
                        <li className='text-[14px] text-[#737373]'>We are hiring</li>
                        <li className='text-[14px] text-[#737373]'>Blog</li>
                    </ul>
                </div>

                <div className='flex items-center w-screen mb-[30px]'>
                    <ul className='flex flex-col gap-[20px]'>
                        <li className='font-bold text-[16px] text-black'>Features</li>
                        <li className='text-[14px] text-[#737373]'>Business Marketing</li>
                        <li className='text-[14px] text-[#737373]'>User Analytic</li>
                        <li className='text-[14px] text-[#737373]'>Live Chat</li>
                        <li className='text-[14px] text-[#737373]'>Unlimited Support</li>
                    </ul>
                </div>

                <div className='flex items-center w-screen mb-[30px]'>
                    <ul className='flex flex-col gap-[20px]'>
                        <li className='font-bold text-[16px] text-black'>Resources</li>
                        <li className='text-[14px] text-[#737373]'>IOS & Android</li>
                        <li className='text-[14px] text-[#737373]'>Watch a Demo</li>
                        <li className='text-[14px] text-[#737373]'>Customers</li>
                        <li className='text-[14px] text-[#737373]'>API</li>
                    </ul>
                </div>
                <div className='w-screen'>
                    <h6 className='font-bold text-[16px] text-black'>Get In Touch</h6>
                    <div className='flex '>
                        <input type="email" placeholder='Your Email' className='border-[1px] border-[#F9F9F9] rounder-[5px] w-[204px] h-[58px]' />
                        <Button
                            className='rounded-r-[5px]'
                            text='Subscribe'
                            width={117}
                            height={58}
                            bg_color='#23A6F0'
                            color='white'
                        >
                        </Button>
                    </div>
                    <p className='text-[12px] text-[#737373]'>Lore imp sum dolor Amit</p>
                </div>
            </div>
            <div className='flex justify-center items-center w-screen h-[98px] mt-[50px] lg:hidden'>
                <h6 className='font-bold text-[16px] text-[#737373] text-center'>Made With Love By <br /> 
                Finland All Right Reserved </h6>
            </div>
            <div className='flex items-center w-screen h-[98px] ml-[48px] mt-[10px] max-lg:hidden'>
                <h6 className='font-bold text-[16px] text-[#737373] text-center'>Made With Love By  
                Finland All Right Reserved </h6>
            </div>
        </div>
    )
}

export default Footer
