import { useEffect } from 'react';
import ContactAddress from '../components/ContactAddress';
import ContactForm from '../components/ContactForm';
import Faqs from '../components/Faqs';

export default function ContactPage() {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div className='mx-auto mt-14 md:mt-20 space-y-4 max-w-360 py-8 px-4 md:px-6'>
      <h1 className='text-3xl sm:text-4xl font-semibold lg:text-4xl'>
        Get In Touch
      </h1>
      <div className='flex flex-col justify-between gap-y-6 lg:flex-row lg:gap-x-20'>
        <ContactAddress />
        <ContactForm />
      </div>

      <Faqs />
    </div>
  );
}
