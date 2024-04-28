import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { services } from '@/data/services';
import Image from 'next/image';


const HeroSlider = () => {
  return (
    <div className="h-full">
      <Swiper
        effect={'fade'}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        className="mySwiper"
      >
        {
          services.map((service, i) => {
            return (
              <SwiperSlide key={i}>
                <Image src={service.service_banner} width={800} height={500} objectFit='cover' className='rounded-xl' alt='' />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
};

export default HeroSlider;