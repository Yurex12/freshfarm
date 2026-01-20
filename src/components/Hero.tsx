import Button from './Button';

export default function Hero() {
  return (
    <section className='relative bg-cream overflow-hidden pt-22 md:pt-30 pb-5'>
      <div className='mx-auto max-w-360 px-4 md:px-6'>
        <div className='grid items-center gap-12  md:grid-cols-2'>
          {/* Text */}
          <div className='text-center md:text-left'>
            <h1 className='text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl'>
              Agriculture is the <span className='text-primary'>most</span>
              <br />
              helpful & the most <span className='text-primary'>useful</span>
            </h1>

            <p className='mx-auto mt-4 max-w-md text-sm text-foreground/80 sm:text-base md:mx-0'>
              Agriculture was the first occupation of man. It is the foundation
              of all other industries and embraces the whole earth.
            </p>

            <Button as='link' to='#' className='mt-6'>
              Get started
            </Button>
          </div>

          <div className='flex justify-center md:justify-end'>
            <img
              src='/hero.jpg'
              alt='Farmer'
              /* aspect-square, aspect-video, or a custom ratio */
              className='rounded h-auto w-full aspect-[4/2.6] object-cover bg-muted/50'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
