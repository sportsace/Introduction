import './index.css';
import { Link } from '@modern-js/runtime/router';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import logo from './logo.png';
import demo1 from './imgs/demo-1.png';
import demo2 from './imgs/demo-2.png';
import show4 from './imgs/show-4.png';
import show5 from './imgs/show-5.png';
import show6 from './imgs/show-6.png';
import banner from './banner.jpg';
import 'tailwindcss/tailwind.css';

const Index = () => (
  <div>
    <div className="flex justify-start py-2 px-2 bg-slate-50">
      <img src={logo} alt="logo" className="h-16 w-auto" />
    </div>

    <Swiper
      className="wechat-qr relative w-full h-[500px]"
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
        <img
          src={banner}
          className="h-[500px]"
          style={{ width: '100%', objectFit: 'cover' }}
          alt=""
        />
      </SwiperSlide>
      {/* <SwiperSlide style={{ width: '100%', height: '100%' }}>
        <img src={show2} style={{ width: '100%' }} alt="" />
      </SwiperSlide>
      <SwiperSlide style={{ width: '100%', height: '100%' }}>
        <img src={show3} style={{ width: '100%' }} alt="" />
      </SwiperSlide>
      <SwiperSlide style={{ width: '100%', height: '100%' }}>
        <img src={show4} style={{ width: '100%' }} alt="" />
      </SwiperSlide> */}
    </Swiper>

    <div className="text-center py-8">
      <h2 className="text-3xl font-bold mb-4">无畏运动</h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        致力于打造智能化运动平台，让你面对挑战时无所畏惧
      </p>
    </div>
    <div className="2xl:container mx-auto px-4 mb-[30px]">
      <div className="grid grid-flow-col auto-cols-auto justify-between">
        <img src={demo1} alt="image1" className="w-[220px] h-[420px]" />
        <img src={demo2} alt="image1" className="w-[220px] h-[420px]" />
        <img src={show4} alt="image4" className="w-[220px] h-[420px]" />
        <img src={show5} alt="image5" className="w-[220px] h-[420px]" />
        <img src={show6} alt="image6" className="w-[220px] h-[420px]" />
      </div>
    </div>

    <div className="py-4 text-center border-t-2">
      <p className="text-xs text-gray-500">
        <Link prefetch="intent" className="hover:text-sky-500m" to="./privacy">
          隐私协议
        </Link>
        <span className="ml-3 mr-3">|</span>Copyright © 2025 无畏之路.{' '}
        <span className="ml-3 mr-3">|</span>
        <a className="hover:text-sky-500" href="https://beian.miit.gov.cn/">
          京ICP备2024065274号-1
        </a>
      </p>
    </div>
  </div>
);

export default Index;
