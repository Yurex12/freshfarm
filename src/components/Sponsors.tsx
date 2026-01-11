import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { sponsors } from '../constants';

import 'swiper/css';

export default function Sponsors() {
  return (
    <div className='mx-auto max-w-360 px-4 md:px-6 bg-muted/30 rounded-md py-4 md:py-8 space-y-8 overflow-hidden'>
      <p className='text-center text-sm font-semibold uppercase tracking-widest text-foreground/60'>
        Trusted by industry leaders
      </p>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        grabCursor={true}
        slidesPerView={3}
        spaceBetween={20}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 30 },
          768: { slidesPerView: 4, spaceBetween: 40 },
          1024: { slidesPerView: 5, spaceBetween: 40 },
        }}
        className='swiper-linear-behavior'
      >
        {sponsors.map((sponsor) => (
          <SwiperSlide
            key={sponsor.id}
            className='flex justify-center items-center'
          >
            <img
              className='h-8 md:h-10 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300'
              src={sponsor.image}
              alt={sponsor.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
