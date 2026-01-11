import { LocateIcon, Mail, Phone } from 'lucide-react';

function ContactAddress() {
  return (
    <div className='space-y-5'>
      <p className='lg:w-10/12'>
        Use our contact form for all information requests or contact us directly
        using the contact information below.
      </p>

      <h4 className='border-b border-b-gray-600 pb-2 w-fit font-semibold'>
        Feel free to get in touch with us via email or phone
      </h4>

      <div className='space-y-6 py-4'>
        {/* Loaction */}
        <div className='flex items-center gap-x-4'>
          <LocateIcon className='text-3xl' />

          <div>
            <h2 className='font-semibold'>Our office Location</h2>
            <p>FreshFarm, Lekki, phase 1, Lagos State.</p>
          </div>
        </div>

        <div className='flex items-center gap-x-4'>
          <Phone className='text-3xl' />

          <div>
            <h2 className='font-semibold'>Phone</h2>
            <p>09016758057</p>
          </div>
        </div>

        <div className='flex items-center gap-x-4'>
          <Mail className='text-3xl' />

          <div>
            <h2 className='font-semibold'>Email</h2>
            <p>yusufekungomi@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactAddress;
