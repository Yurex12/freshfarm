export default function Subscribe() {
  return (
    <section className='relative overflow-hidden bg-cream py-12 sm:py-16 px-4 md:px-6 '>
      <img
        src='/leaf.png'
        alt=''
        className='pointer-events-none absolute top-0 right-0 w-28 sm:w-40'
      />

      <div className='mx-auto flex max-w-2xl flex-col items-center text-center'>
        <p className='mt-6 text-2xl sm:text-3xl capitalize leading-tight text-foreground'>
          join the agriculture family for offers,
          <br className='hidden sm:block' />
          care tips, and more
        </p>

        <form className='mt-8 w-full'>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-center rounded-lg border border-gray-400 bg-white p-1 shadow-md'>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full flex-1 rounded-md px-4 py-3 text-foreground outline-none placeholder:text-gray-400'
              required
            />

            <button
              type='submit'
              className='rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase text-white transition hover:brightness-110'
            >
              subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
