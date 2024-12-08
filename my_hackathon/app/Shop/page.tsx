import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'
import Button from '@/components/Button/page'
import ShopCard from '@/components/ShopCards/page'
import Card from "@/components/Card/page";
import shop_card_img1 from "@/public/shop_card_img1.svg"
import shop_card_img2 from "@/public/shop_card_img2.svg"
import shop_card_img3 from "@/public/shop_card_img3.svg"
import shop_card_img4 from "@/public/shop_card_img4.svg"
import shop_card_img5 from "@/public/shop_card_img5.svg"
import sort from "@/public/sort.svg"
import option from "@/public/option.svg"
import company6 from '@/public/company6.svg'
import company5 from "@/public/company5.svg"
import company4 from "@/public/company4.svg"
import company3 from "@/public/company3.svg"
import company2 from "@/public/company2.svg"
import company1 from "@/public/company1.svg"
import card_img_1 from "@/public/card_img_1.svg"
import card_img_2 from "@/public/card_img_2.svg"
import card_img_3 from "@/public/card_img_3.svg"
import card_img_4 from "@/public/card_img_4.svg"
import card_img_5 from "@/public/card_img_5.svg"
import card_img_6 from "@/public/card_img_6.svg"
import card_img_7 from "@/public/card_img_7.svg"
import card_img_8 from "@/public/card_img_8.svg"
import card_img_m1 from "@/public/card_img_m1.svg"
import card_img_m2 from "@/public/card_img_m2.svg"
import card_img_m3 from "@/public/card_img_m3.svg"
import card_img_m4 from "@/public/card_img_m4.svg"
import card_img_m5 from "@/public/card_img_m5.svg"
import card_img_m6 from "@/public/card_img_m6.svg"
import card_img_m7 from "@/public/card_img_m7.svg"
import greater_than from '@/public/greater_than.svg'
import pagination from "@/public/Pagination.svg"
const Shop = () => {
    return (
        <div>
            <Header />
            <div className='w-[screen] '>
                <div className='flex flex-col justify-center items-center gap-[30px] h-[202px]'>
                    <h2 className='font-bold text-[24px] text-[#252B42]'>Shop</h2>
                    <ul className='flex gap-[2px]'>
                        <li className='font-bold text-[14px] text-[#252B42]'>Home</li>
                        <li className='flex'>
                            <Image
                                src={greater_than}
                                alt='greater than sign'
                                width={7}
                                height={12}
                            >
                            </Image>
                        </li>
                        <li className='text-[14px] font-bold text-[#737373]'>Shop</li>
                    </ul>
                </div>

                <div className='flex flex-col items-center gap-[15px] lg:flex-row '>
                    <ShopCard
                        image={shop_card_img1}
                        width={332}
                        height={300}
                    >
                    </ShopCard>
                    <ShopCard
                        image={shop_card_img2}
                        width={332}
                        height={300}
                    >
                    </ShopCard>
                    <ShopCard
                        image={shop_card_img3}
                        width={332}
                        height={300}
                    >
                    </ShopCard>
                    <ShopCard
                        image={shop_card_img4}
                        width={332}
                        height={300}
                    >
                    </ShopCard>
                    <ShopCard
                        image={shop_card_img5}
                        width={332}
                        height={300}
                    >
                    </ShopCard>
                </div>

                <div className='flex flex-col justify-center items-center gap-[24px] mt-[40px] w-screen h-[216px] lg:flex-row lg:justify-between lg:mt-20px'>
                    <h6 className='font-bold text-[14px] text-[#737373]'>Showing all 12 results
                    </h6>
                    <div>
                        <Image
                            src={sort}
                            alt='sort'
                            width={177}
                            height={46}
                        >
                        </Image>
                    </div>
                    <div className='flex gap-[15px]'>
                        <Image
                            src={option}
                            alt='option'
                            width={141}
                            height={50}
                        >
                        </Image>
                        <Button
                            className='rounded-[5px]'
                            text='Filter'
                            width={94}
                            height={50}
                            bg_color='#23A6F0'
                            color='white'
                        >
                        </Button>
                    </div>
                </div>

            </div>

            <div className='flex justify-center items-center gap-[60px] w-screen h-[175px] mb-[100px] max-lg:hidden'>
                <Image
                    src={company1}
                    alt='company1'
                    width={153}
                    height={50}
                >
                </Image>
                <Image
                    src={company2}
                    alt='company2'
                    width={146}
                    height={99}
                >
                </Image>
                <Image
                    src={company3}
                    alt='company3'
                    width={152}
                    height={109}
                >
                </Image>
                <Image
                    src={company4}
                    alt='company4'
                    width={149}
                    height={60}
                >
                </Image>
                <Image
                    src={company5}
                    alt='company5'
                    width={151}
                    height={92}
                >
                </Image>
                <Image
                    src={company6}
                    alt='company6'
                    width={151}
                    height={142}
                >
                </Image>

            </div>

            <div className="flex flex-col  items-center gap-[48px] w-screen h-[2540px] mt-[100px] lg:hidden ">
                <Card
                    card_w={328}
                    card_h={615}
                    image={card_img_m1}
                    img_w={348}
                    img_h={427}
                    main_w={348}
                    main_h={188}
                >
                </Card>
                <Card
                    card_w={328}
                    card_h={615}
                    image={card_img_m2}
                    img_w={348}
                    img_h={427}
                    main_w={348}
                    main_h={188}
                >
                </Card>
                <Card
                    card_w={328}
                    card_h={615}
                    image={card_img_m3}
                    img_w={348}
                    img_h={427}
                    main_w={348}
                    main_h={188}
                >
                </Card>
                <Card
                    card_w={328}
                    card_h={615}
                    image={card_img_m4}
                    img_w={348}
                    img_h={427}
                    main_w={348}
                    main_h={188}
                >
                </Card>
            </div>
            <div className="flex flex-col items-center gap-[80px] mb-[50px] max-lg:hidden ">
                <div className="flex  justify-center items-center gap-[48px] w-[1049px] h-[615px] ">
                    <Card
                        card_w={238}
                        card_h={615}
                        image={card_img_1}
                        img_w={239}
                        img_h={427}
                        main_w={239}
                        main_h={188}
                    >
                    </Card>
                    <Card
                        card_w={238}
                        card_h={615}
                        image={card_img_2}
                        img_w={239}
                        img_h={427}
                        main_w={239}
                        main_h={188}
                    >
                    </Card>
                    <Card
                        card_w={238}
                        card_h={615}
                        image={card_img_3}
                        img_w={239}
                        img_h={427}
                        main_w={239}
                        main_h={188}
                    >
                    </Card>
                    <Card
                        card_w={238}
                        card_h={615}
                        image={card_img_4}
                        img_w={239}
                        img_h={427}
                        main_w={239}
                        main_h={188}
                    >
                    </Card>
                </div>
                <div className="flex  justify-center items-center gap-[48px] w-[1049px] h-[615px]  ">
                    <Card
                        card_w={238}
                        card_h={615}
                        image={card_img_5}
                        img_w={239}
                        img_h={427}
                        main_w={239}
                        main_h={188}
                    >
                    </Card>
                    <Card
                        card_w={238}
                        card_h={615}
                        image={card_img_6}
                        img_w={239}
                        img_h={427}
                        main_w={239}
                        main_h={188}
                    >
                    </Card>
                    <Card
                        card_w={238}
                        card_h={615}
                        image={card_img_7}
                        img_w={239}
                        img_h={427}
                        main_w={239}
                        main_h={188}
                    >
                    </Card>
                    <Card
                        card_w={238}
                        card_h={615}
                        image={card_img_8}
                        img_w={239}
                        img_h={427}
                        main_w={239}
                        main_h={188}
                    >
                    </Card>
                </div>
                <div className="flex  justify-center items-center gap-[48px] w-[1049px] h-[615px] ">
                    <Card
                        card_w={238}
                        card_h={615}
                        image={card_img_1}
                        img_w={239}
                        img_h={427}
                        main_w={239}
                        main_h={188}
                    >
                    </Card>
                    <Card
                        card_w={238}
                        card_h={615}
                        image={card_img_2}
                        img_w={239}
                        img_h={427}
                        main_w={239}
                        main_h={188}
                    >
                    </Card>
                    <Card
                        card_w={238}
                        card_h={615}
                        image={card_img_3}
                        img_w={239}
                        img_h={427}
                        main_w={239}
                        main_h={188}
                    >
                    </Card>
                    <Card
                        card_w={238}
                        card_h={615}
                        image={card_img_4}
                        img_w={239}
                        img_h={427}
                        main_w={239}
                        main_h={188}
                    >
                    </Card>
                </div>
                <Image
                    src={pagination}                
                    alt='pagination'
                    width={313}
                    height={74}
                >
                </Image>
            </div>
            <div className='flex flex-col justify-center items-center gap-[60px] w-screen h-[1173px] lg:hidden'>
                <Image
                    src={company1}
                    alt='company1'
                    width={153}
                    height={50}
                >
                </Image>
                <Image
                    src={company2}
                    alt='company2'
                    width={146}
                    height={99}
                >
                </Image>
                <Image
                    src={company3}
                    alt='company3'
                    width={152}
                    height={109}
                >
                </Image>
                <Image
                    src={company4}
                    alt='company4'
                    width={149}
                    height={60}
                >
                </Image>
                <Image
                    src={company5}
                    alt='company5'
                    width={151}
                    height={92}
                >
                </Image>
                <Image
                    src={company6}
                    alt='company6'
                    width={151}
                    height={142}
                >
                </Image>

            </div>

            <Footer />
        </div>
    )
}

export default Shop
