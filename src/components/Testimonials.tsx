import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';

import 'swiper/css/pagination';
import { testimonials } from '../constants';

export default function Testimonials() {
  return (
    <div className='mx-auto max-w-360 px-4 md:px-6 space-y-4 md:space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-center text-3xl font-semibold text-foreground sm:text-4xl'>
          Testimonials
        </h1>

        <div className='flex items-center justify-between gap-4'>
          <button
            className='testimonial-prev flex h-10 w-10 items-center justify-center rounded-full border border-foreground/40 bg-background text-foreground transition hover:bg-background/10'
            aria-label='Previous testimonial'
          >
            <ChevronLeft className='h-5 w-5' />
          </button>

          <button
            className='testimonial-next flex h-10 w-10 items-center justify-center rounded-full border border-foreground/40 bg-background text-foreground transition hover:bg-background/10'
            aria-label='Next testimonial'
          >
            <ChevronRight className='h-5 w-5' />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true, el: '.custom-pagination' }}
        navigation={{
          prevEl: '.testimonial-prev',
          nextEl: '.testimonial-next',
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className='pb-12'
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className='flex flex-col rounded-md border border-foreground/40 p-6'>
              <div className='flex items-center gap-4 pb-4 border-b border-foreground/40'>
                <img
                  src={testimonial.image}
                  alt={testimonial.name.split('')[0]}
                  className='h-12 w-12 rounded-full object-cover bg-accent'
                />

                <div>
                  <h3 className='text-sm font-semibold text-foreground'>
                    {testimonial.name}
                  </h3>
                  <p className='text-xs text-foreground/70'>
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className='mt-4 flex-1'>
                <p className='leading-relaxed text-sm text-foreground/90'>
                  {testimonial.content}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='custom-pagination mt-4 flex justify-center gap-1.5'></div>
    </div>
  );
}
