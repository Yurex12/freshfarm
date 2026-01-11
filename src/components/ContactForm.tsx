import Button from './Button';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log('Form Submitted:', data);

    e.currentTarget.reset();
  };

  return (
    <div className='w-full rounded border border-foreground/40 lg:max-w-xl py-6 px-4'>
      <h3 className='mb-6 text-2xl font-semibold'>Have a question?</h3>

      <form onSubmit={handleSubmit} className='space-y-4'>
        {/* Name */}
        <div className='space-y-2'>
          <label htmlFor='name' className='text-sm font-medium'>
            Full Name
          </label>
          <input
            id='name'
            name='name'
            type='text'
            required
            minLength={2}
            placeholder='John Doe'
            className='w-full rounded-md border border-foreground/40 p-2 text-sm placeholder:text-sm focus:border-primary focus:outline-none focus:ring-0'
          />
        </div>

        {/* Email */}
        <div className='space-y-2'>
          <label htmlFor='email' className='text-sm font-medium'>
            Email Address
          </label>
          <input
            id='email'
            name='email'
            type='email'
            required
            placeholder='john@example.com'
            className='w-full rounded-md border border-foreground/40 p-2 text-sm placeholder:text-sm focus:border-primary focus:outline-none focus:ring-0'
          />
        </div>

        {/* Message */}
        <div className='space-y-2'>
          <label htmlFor='message' className='text-sm font-medium'>
            Your Message
          </label>
          <textarea
            id='message'
            name='message'
            required
            minLength={10}
            rows={4}
            placeholder='How can we help you?'
            className='w-full rounded-md border border-foreground/40 p-2 text-sm placeholder:text-sm resize-none focus:border-primary focus:outline-none focus:ring-0'
          />
        </div>

        <Button type='submit' className='w-full'>
          Send Message
        </Button>
      </form>
    </div>
  );
}
