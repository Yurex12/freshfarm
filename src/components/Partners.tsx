import { partners } from '../constants';
import Button from './Button';

export default function Partners() {
  return (
    <section className='mx-auto max-w-360 grid gap-10 px-4 md:px-6  md:grid-cols-[1.1fr_0.9fr] items-center'>
      <div className='flex flex-col items-center lg:items-start'>
        <div className='text-center md:text-left'>
          <h1 className='text-3xl font-semibold text-foreground sm:text-4xl'>
            Our Farm Management Partners
          </h1>

          <p className='mt-4 md:max-w-md text-sm text-foreground/80 sm:text-base'>
            Agriculture was the first occupation of man, and as it embraces the
            whole earth, it is the foundation of all.
          </p>
        </div>

        <div className='mt-8 space-y-4 w-full'>
          {partners.map((partner) => (
            <div
              key={partner.id}
              className='flex items-start gap-4 border border-foreground/40 rounded-md p-2'
            >
              <img
                src={partner.image}
                alt={partner.name}
                className='h-16 w-16 rounded-full object-cover'
              />

              <div>
                <h2 className='text-base font-semibold text-foreground'>
                  {partner.name}
                </h2>
                <p className='text-sm text-foreground/70'>
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button as='link' to='#' className='mt-8'>
          Get started
        </Button>
      </div>

      <div className='flex justify-center lg:justify-end'>
        <img
          src='/farmer.png'
          alt='Farmer'
          className='w-72 sm:w-80 lg:w-full max-w-md rounded-2xl object-cover'
        />
      </div>
    </section>
  );
}
