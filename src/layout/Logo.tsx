import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link
      to='/'
      className='flex items-center gap-2 text-xl font-semibold tracking-tight'
    >
      <span className='flex h-8 w-8 items-center justify-center rounded-md bg-primary text-white text-sm font-bold'>
        F
      </span>

      <span>FRESHFARM</span>
    </Link>
  );
}
