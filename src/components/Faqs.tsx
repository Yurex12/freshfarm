import { useState } from 'react';

import { ChevronDown } from 'lucide-react';
import { faqs } from '../constants';

export default function Faqs() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className='max-w-2xl space-y-3'>
      <h1 className='text-2xl font-semibold text-foreground sm:text-4xl'>
        Frequently asked questions
      </h1>
      <div className='divide-y divide-gray-200'>
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div key={faq.id} className='py-4'>
              <button
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className={`flex w-full items-center justify-between text-left font-medium text-lg transition-colors hover:text-primary hover:cursor-pointer ${
                  isOpen ? 'text-primary' : ''
                }`}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? 'grid-rows-[1fr] opacity-100 mt-4'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className='overflow-hidden  leading-relaxed'>
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
