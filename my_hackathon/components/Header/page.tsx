import React from 'react'
import Image from 'next/image'
import telephone from "@/public/telephone.svg"
import mail from "@/public/mail.svg"
import instagram from "@/public/instagram.svg"
import youtube from "@/public/youtube.svg"
import facebook from "@/public/facebook.svg"
import twitter from "@/public/twitter.svg"
import bandage from "@/public/Bandage.svg"
import arrow from "@/public/Donw_arrow.svg"
import person from "@/public/Person.svg"
import search from "@/public/Search.svg"
import shop from "@/public/Shop.svg"
import heart from "@/public/Heart.svg"
import horizontal_lines from "@/public/Horizontal_lines.svg"
import shop_black from "@/public/Shop_black.svg"
import search_black from "@/public/Search_black.svg"
const Header = () => {
    return (
        <div>

            <div className='flex items-center justify-between w-screen h-[58px] bg-header_color max-[1438px]:hidden'>
                <div className='flex gap-[10px] w-[415px] h-[46px]'>
                    <div className='flex gap-[5px] p-[10px] w-[145px] h-[44px]'>
                        <Image
                            src={telephone}
                            alt='telephone'
                            height={16}
                            width={16}
                        >
                        </Image>
                        <h6 className='font-bold text-[14px] text-white'>(225) 555-0118</h6>
                    </div>
                    <div className='flex gap-[5px] p-[10px] w-[145px] h-[44px]'>
                        <Image
                            src={mail}
                            alt='mail'
                            height={16}
                            width={16}
                        >
                        </Image>
                        <h6 className='font-bold text-[14px] text-white'>michelle.rivera@example.com</h6>
                    </div>
                </div>
                <div className='flex justify-center items-center w-[332px] h-[44px] '>
                    <p className='font-bold text-[14px] text-white'>Follow Us  and get a chance to win 80% off</p>
                </div>
                <div className='flex items-center gap-[10px] p-[10px] w-[233px] h-[46px] '>
                    <div className='w-[83px] h-[24px]'>
                        <h6 className='font-bold text-[14px] text-white'>Follow Us  :</h6>
                    </div>
                    <div className='flex items-center w-[120px] h-[26px] '>
                        <div className='flex items-center w-[26px] h-[26px]'>
                            <Image
                                src={instagram}
                                alt='instagram'
                                height={16}
                                width={16}
                            >
                            </Image>
                        </div>
                        <div className='flex items-center w-[26px] h-[26px]'>
                            <Image
                                src={youtube}
                                alt='youtube'
                                height={16}
                                width={16}
                            >
                            </Image>
                        </div>
                        <div className='flex items-center w-[26px] h-[26px]'>
                            <Image
                                src={facebook}
                                alt='facebook'
                                height={16}
                                width={16}
                            >
                            </Image>
                        </div>
                        <div className='flex items-center w-[26px] h-[26px]'>
                            <Image
                                src={twitter}
                                alt='twitter'
                                height={16}
                                width={16}
                            >
                            </Image>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex items-center justify-between w-screen h-[58px] min-[400px]:justify-between '>
                    <div className='flex items-center ml-[38px] w-[187px] h-[58px]'>
                        <Image
                            src={bandage}
                            alt='bandage'
                            width={108}
                            height={32}
                        >
                        </Image>
                    </div>

                    <div className='mr-[27vw] max-[1000px]:hidden'>
                        <ul className='flex gap-[15px] text-[#737373] text-[14px] font-bold'>
                            <li>Home</li>
                            <li className='flex gap-[5px]'>
                                <a href="Shop">Shop</a>
                                <Image
                                    src={arrow}
                                    alt='arrow'
                                    width={5.71}
                                    height={10}
                                >
                                </Image>
                            </li>
                            <li><a href="Pricing">Pricing</a></li>
                            <li><a href="About">About</a></li>
                            <li><a href="Team">Team</a></li>
                            <li><a href="Contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className='flex gap-[20px] w-[324px] h-[54px] min-[400px]:gap-[1px] max-[1000px]:w-[150px} justify-center max-[1000px]:hidden'>
                        <div className='flex gap-[5px] w-[166px] h-[54px] max-[1000px]:hidden'>
                            <Image
                                src={person}
                                alt='person'
                                width={12}
                                height={12}
                            >
                            </Image>
                            <h6 className='flex items-center text-[#23A6F0] font-bold text-[14px] h-[54px]'>Login / Register</h6>
                        </div>
                        <div className='flex items-center justify-center w-[46px] h-[46px]'>
                            <Image
                                src={search}
                                alt='search'
                                width={16}
                                height={16}
                            >
                            </Image>
                        </div>
                        <div className='flex items-center justify-center w-[56px] h-[46px]'>
                            <Image
                                src={shop}
                                alt='shop'
                                width={16}
                                height={16}
                            >
                            </Image>
                            <p className='font-normal text-[12px] text-[#23A6F0]'>1</p>
                        </div>
                        <div className='flex items-center justify-center w-[56px] h-[46px]'>
                            <Image
                                src={heart}
                                alt='heart'
                                width={16}
                                height={16}
                            >
                            </Image>
                            <p className='font-normal text-[12px] text-[#23A6F0]'>1</p>
                        </div>
                    </div>
                    <div className='flex gap-[20px] w-[324px] h-[54px] min-[400px]:gap-[1px] max-[1000px]:w-[150px} justify-center min-[1000px]:hidden'>
                        
                        <div className='flex items-center justify-center w-[40px] h-[46px]'>
                            <Image
                                src={search_black}
                                alt='search'
                                width={16}
                                height={16}
                            >
                            </Image>
                        </div>
                        <div className='flex items-center justify-center w-[40px] h-[46px]'>
                            <Image
                                src={shop_black}
                                alt='shop'
                                width={16}
                                height={16}
                            >
                            </Image>
                        </div>
                        <div className='flex items-center justify-center w-[40px] h-[46px]'>
                            <Image
                                src={horizontal_lines}
                                alt='heart'
                                width={16}
                                height={16}
                            >
                            </Image>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-[50px]  w-screen min-[1000px]:hidden'>
                    <ul className='flex flex-col gap-[15px] text-[#737373] text-[20px] font-bold '>
                        <li>Home</li>
                        <li className='flex gap-[5px]'>
                            <a href="Shop">Shop</a>
                            <Image
                                src={arrow}
                                alt='arrow'
                                width={5.71}
                                height={10}
                            >
                            </Image>
                        </li>
                        <li><a href="Pricing">Pricing</a></li>
                        <li><a href="About">About</a></li>
                        <li><a href="Team">Team</a></li>
                        <li><a href="Contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
