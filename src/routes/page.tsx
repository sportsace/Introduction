// import './index.css';
import 'tailwindcss/tailwind.css';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import logo from './logo.png';
import banner1 from './banner.jpg';

const Index = () => (
  <div>
    <div className="flex justify-start py-2 px-2 bg-slate-700">
      <img src={logo} alt="logo" className="h-16 w-auto" />
    </div>

    <Swiper
      className="relative w-full overflow-hidden h-[300px]"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      centeredSlides={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide style={{ width: '100%', height: '100%' }}>
        <img src={banner1} style={{ width: '100%' }} alt="" />
      </SwiperSlide>
      <SwiperSlide style={{ width: '100%', height: '100%' }}>
        <img src={banner1} style={{ width: '100%' }} alt="" />
      </SwiperSlide>
      <SwiperSlide style={{ width: '100%', height: '100%' }}>
        <img src={banner1} style={{ width: '100%' }} alt="" />
      </SwiperSlide>
      <SwiperSlide style={{ width: '100%', height: '100%' }}>
        <img src={banner1} style={{ width: '100%' }} alt="" />
      </SwiperSlide>
    </Swiper>

    <div className="text-center py-8">
      <h2 className="text-2xl font-bold mb-4">Welcome to Our Website</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div className="container mx-auto px-4 mb-[30px]">
      <div className="grid grid-flow-col auto-cols-auto justify-between">
        <img src={banner1} alt="image1" className="w-[220px] h-[300px]" />
        <img src={banner1} alt="image2" className="w-[220px] h-[300px]" />
        <img src={banner1} alt="image3" className="w-[220px] h-[300px]" />
        <img src={banner1} alt="image4" className="w-[220px] h-[300px]" />
      </div>
    </div>

    <div className="py-4 text-center border-t-2">
      <p className="text-xs text-gray-500">
        © 2021 Company, Inc. All rights reserved.备案号：XXXXXXX
      </p>
    </div>
  </div>
);

export default Index;
