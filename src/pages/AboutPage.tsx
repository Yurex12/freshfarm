import { MoveRight } from 'lucide-react';
import Button from '../components/Button';
import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div className='mx-auto flex flex-col items-center justify-between gap-y-8 lg:flex-row lg:gap-x-20 mt-14 md:mt-20 max-w-360 py-8 px-4 md:px-6'>
      <div className='lg:basis-1/2'>
        <h1 className='text-3xl sm:text-4xl font-semibold lg:text-4xl mb-4'>
          Welcome to FreshFarm
        </h1>

        <div className='space-y-4'>
          <p>
            At FreshFarm, we are committed to empowering farmers and
            strengthening agricultural communities through modern, reliable, and
            sustainable solutions. Our platform connects farmers with the tools,
            knowledge, and opportunities they need to grow efficiently and
            confidently.
          </p>

          <p>
            From farm management and market access to financing and expert
            advisory, FreshFarm brings essential agricultural services together
            in one place. We focus on improving productivity, reducing
            operational challenges, and helping farmers make informed decisions
            backed by data and experience.
          </p>

          <p>
            We believe agriculture thrives when innovation meets tradition. By
            combining modern technology with practical farming insights, we
            support both small-scale and commercial farmers in achieving
            consistent yields, better market value, and long-term
            sustainability.
          </p>

          <div className='space-y-4'>
            <p>
              Join us as we build a smarter, more connected future for
              agriculture.
            </p>

            <Button as='link' to='/contact' className='gap-3 w-fit'>
              <span>Explore Our Solutions</span>
              <MoveRight />
            </Button>
          </div>
        </div>
      </div>

      {/* image */}
      <div className='lg:basis-1/2'>
        <img src='/about.jpg' alt='About image' className='rounded-md' />
      </div>
    </div>
  );
}
