// import './index.css';
import 'tailwindcss/tailwind.css';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import logo from './logo-removebg-preview.png';
import show1 from './imgs/show-1.jpg';
import show2 from './imgs/show-2.jpg';
import show3 from './imgs/show-3.jpg';
import show4 from './imgs/show-4.jpg';
import show5 from './imgs/show-5.jpg';

const Index = () => (
  <div>
    <div className="flex justify-start py-2 px-2 bg-slate-50">
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
        <img src={show1} style={{ width: '100%' }} alt="" />
      </SwiperSlide>
      <SwiperSlide style={{ width: '100%', height: '100%' }}>
        <img src={show2} style={{ width: '100%' }} alt="" />
      </SwiperSlide>
      <SwiperSlide style={{ width: '100%', height: '100%' }}>
        <img src={show3} style={{ width: '100%' }} alt="" />
      </SwiperSlide>
      <SwiperSlide style={{ width: '100%', height: '100%' }}>
        <img src={show4} style={{ width: '100%' }} alt="" />
      </SwiperSlide>
    </Swiper>

    <div className="text-center py-8">
      <h2 className="text-2xl font-bold mb-4">无畏运动</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        致力于打造智能化运动平台，让你面对挑战时无所畏惧
      </p>
    </div>
    <div className="container mx-auto px-4 mb-[30px]">
      <div className="grid grid-flow-col auto-cols-auto justify-between">
        <img src={show1} alt="image1" className="w-[220px] h-[420px]" />
        <img src={show2} alt="image2" className="w-[220px] h-[420px]" />
        <img src={show3} alt="image3" className="w-[220px] h-[420px]" />
        <img src={show4} alt="image4" className="w-[220px] h-[420px]" />
        <img src={show5} alt="image5" className="w-[220px] h-[420px]" />
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
