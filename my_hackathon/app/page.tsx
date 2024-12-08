import Image from "next/image";
import Header from "@/components/Header/page";
import Button from "@/components/Button/page";
import Card from "@/components/Card/page";
import PostCard from "@/components/Post_Card/page";
import Footer from "@/components/Footer/page";
import men from "@/public/men.svg"
import women from "@/public/women.svg"
import accessories from "@/public/accessories.svg"
import kids from "@/public/kids.svg"
import men_m from "@/public/men_m.svg"
import women_m from "@/public/women_m.svg"
import accessories_m from "@/public/accessories_m.svg"
import kids_m from "@/public/kids_m.svg"
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
import front_img_sec from "@/public/front_image_sec.svg"
import sec_img from "@/public/sec_img.svg"
import sec_img_d from "@/public/sec_img_d.svg"
import post_card_img1 from "@/public/post_card_img1.svg"
import post_card_img2 from "@/public/post_card_img2.svg"
import post_card_img3 from "@/public/post_card_img3.svg"
export default function Home() {
  return (
    <div>
      <Header />

      <div className="flex justify-center items-center w-screen h-[717px] bg-main_image bg-cover bg-center">
        <div className="flex flex-col justify-center gap-[50px] mr-[35vw] w-[599px] h-[331px] max-[1000px]:mr-0 max-[1000px]:items-center">
          <h5 className="font-bold text-[16px] text-white">SUMMER 2020</h5>
          <h1 className="font-bold text-[58px] text-white max-[1000px]:text-[40px]">NEW COLLECTION</h1>
          <p className="text-[20px] text-white">We know how large objects will act, <br />
            but things on a small scale.</p>
          <Button
            className="font-bold text-[24px]"
            text="SHOP NOW"
            width={221}
            height={62}
            bg_color="#2DC071"
            color="white"
          >
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-[48px] justify-center items-center bg-[#FAFAFA] w-screen h-[770px] max-lg:w-[333px] max-lg:h-[1850px] max-lg:m-auto">
        <div className="flex flex-col gap-[10px]">
          <h2 className="font-bold text-[24px] text-center">EDITOR’S PICK</h2>
          <p className="text-[14px] text-center text-[#737373]">Problems trying to resolve the conflict between </p>
        </div>
        <div className="flex gap-[30px] max-lg:hidden ">
          <div>
            <Image
              src={men}
              alt="men"
              width={510}
              height={500}
            >
            </Image>
          </div>
          <div>
            <Image
              src={women}
              alt="women"
              width={240}
              height={500}
            >
            </Image>
          </div>
          <div className="flex flex-col justify-center items-center gap-[16px] w-[240px] h-[500px]">
            <div>
              <Image
                src={accessories}
                alt="accessories"
                width={240}
                height={242}
              >
              </Image>
            </div>
            <div>
              <Image
                src={kids}
                alt="kids"
                width={240}
                height={242}
              >
              </Image>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[30px] lg:hidden  ">
          <div>
            <Image
              src={men_m}
              alt="men"
              width={324}
              height={500}
            >
            </Image>
          </div>
          <div>
            <Image
              src={women_m}
              alt="women"
              width={325}
              height={500}
            >
            </Image>
          </div>
          <div className="flex flex-col justify-center items-center gap-[16px] w-[325px] h-[500px]">
            <div>
              <Image
                src={accessories_m}
                alt="accessories"
                width={325}
                height={242}
              >
              </Image>
            </div>
            <div>
              <Image
                src={kids_m}
                alt="kids"
                width={325}
                height={242}
              >
              </Image>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center m-auto w-screen h-[5510px] lg:h-[1652px] lg:justify-center">
        <div className="flex flex-col justify-center items-center w-[692px] h-[102px]">
          <h4 className="text-[20px] text-[#737373]">Featured Products</h4>
          <h3 className="font-bold text-[24px]">BESTSELLER PRODUCTS</h3>
          <p className="text-[14px] text-[#737373]">Problems trying to resolve the conflict between </p>
        </div>
        <div className="flex flex-col gap-[80px] max-lg:hidden ">
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
        </div>

        <div className="flex flex-col gap-[400px] lg:hidden ">
          <div className="flex flex-col  items-center gap-[48px] w-screen h-[2250px] ">
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
          <div className="flex flex-col items-center gap-[48px] w-screen h-[2250px]  ">
            <Card
              card_w={328}
              card_h={615}
              image={card_img_m5}
              img_w={348}
              img_h={427}
              main_w={348}
              main_h={188}
            >
            </Card>
            <Card
              card_w={328}
              card_h={615}
              image={card_img_m6}
              img_w={348}
              img_h={427}
              main_w={348}
              main_h={188}
            >
            </Card>
            <Card
              card_w={328}
              card_h={615}
              image={card_img_m6}
              img_w={348}
              img_h={427}
              main_w={348}
              main_h={188}
            >
            </Card>
            <Card
              card_w={328}
              card_h={615}
              image={card_img_m7}
              img_w={348}
              img_h={427}
              main_w={348}
              main_h={188}
            >
            </Card>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[30px] w-[414px] h-[1230px] bg-bg_image_sec lg:w-[1440px] lg:h-[709px] lg:flex-row lg:justify-center lg:gap-[80px] max-lg:m-auto ">
        <div className="flex flex-col gap-[35px] mt-[190px]">
          <h5 className="text-[20px] text-white text-center">SUMMER 2020</h5>
          <h2 className="font-bold text-white text-[40px] text-center">Vita Classic <br />
            Product</h2>
          <p className="text-[20px] text-center text-white">We know how large objects <br />
            will act, but things on a <br />
            small scale.</p>
          <div className="flex flex-col justify-center items-center gap-[20px] lg:flex-row">
            <p className="font-bold text-[24px] text-center text-white">$16.48</p>
            <Button
              className="font-bold text-[14px]"
              text="ADD TO CART"
              width={184}
              height={52}
              color="white"
              bg_color="#2DC071"
            >
            </Button>
          </div>
        </div>
        <div>
          <Image
            src={front_img_sec}
            alt="front image"
            width={416}
            height={681}
          >
          </Image>
        </div>
      </div>

      <div className="w-screen h-[911px] lg:h-[682px] lg:flex lg:justify-center ">
        <div className="flex justify-center items-center max-lg:hidden">
          <Image
            src={sec_img_d}
            alt="section image"
            width={775}
            height={774}
          >
          </Image>
        </div>
        <div className="flex flex-col mt-[120px] gap-[32.78px] items-center w-screen lg:mt-0 ">
          <div className="flex flex-col gap-[32.78px] w-[394.33px] lg:hidden">
            <h5 className="font-bold text-[16px] text-center text-[#BDBDBD]">SUMMER 2020</h5>
            <h2 className="font-bold text-[40px] text-black text-center">Part of the <br /> Neural <br /> Universe</h2>
            <h4 className="text-[20px] text-[#737373] text-center">We know how large <br /> objects will act, but <br /> things on a small scale.</h4>
          </div>
          <div className="flex flex-col gap-[32.78px] w-[394.33px] pt-[200px] max-lg:hidden ">
            <h5 className="font-bold text-[16px] text-center text-[#BDBDBD]">SUMMER 2020</h5>
            <h2 className="font-bold text-[40px] text-black text-center">Part of the Neural  Universe</h2>
            <h4 className="text-[20px] text-[#737373] text-center">We know how large objects will act, but things on a small scale.</h4>
          </div>
          <div className="flex flex-col gap-[25px] lg:hidden">
            <Button
              className="font-bold text-[14px]"
              text="BUY NOW"
              color="white"
              bg_color="#23A6F0"
              height={52}
              width={156}
            >
            </Button>
            <Button
              className="font-bold text-[14px] border-[#23A6F0] border-[1px] rounded-[5px]"
              text="Learn More"
              color="#23A6F0"
              bg_color="white"
              height={52}
              width={156}
            >
            </Button>
          </div>

          <div className="flex gap-[25px] max-lg:hidden">
            <Button
              className="font-bold text-[14px]"
              text="BUY NOW"
              color="white"
              bg_color="#2DC701"
              height={52}
              width={156}
            >
            </Button>
            <Button
              className="font-bold text-[14px] border-[#23A6F0] border-[1px] rounded-[5px]"
              text="Learn More"
              color="#2DC701"
              bg_color="white"
              height={52}
              width={156}
            >
            </Button>
          </div>  

        </div>
        <div className="flex justify-center items-center lg:hidden">
          <Image
            src={sec_img}
            alt="section image"
            width={414}
            height={407}
          >
          </Image>
        </div>
      </div>

      <div className="w-screen mt-[100px] h-[2302px] lg:h-[802px] ">
        <div className="flex flex-col gap-[10px] justify-center items-center">
          <h6 className="font-bold text-[14x] text-[#23A6F0] text-center">Practice Advice</h6>
          <h2 className="font-bold text-[40px] text-black text-center lg:hidden">Featured <br /> Products</h2>
          <p className="text-[14px] text-[#737373] text-center lg:hidden">Problems trying to resolve the <br /> conflict between the two major </p>
          <h2 className="font-bold text-[40px] text-black text-center max-lg:hidden">Featured Posts</h2>
          <p className="text-[14px] text-[#737373] text-center max-lg:hidden">Problems trying to resolve the conflict between <br /> the two major </p>
        </div>
        <div className="flex flex-col items-center gap-[30px] mt-[50px] lg:flex-row lg:justify-center">
          <PostCard
            image={post_card_img1}
          >
          </PostCard>
          <PostCard
            image={post_card_img2}
          >
          </PostCard>
          <PostCard
            image={post_card_img3}
          >
          </PostCard>
        </div>

      </div>

      <Footer />    
    </div>
  );
}
