import { useState } from 'react';
import Logo from './Logo';
import MobileNav from './MobileNav';
import Navbar from './Navbar';
import { Menu } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((open) => !open);
  return (
    <header className='fixed top-0 z-50 mx-auto flex w-full bg-background items-center justify-between shadow'>
      <div className='mx-auto flex max-w-360 flex-1 items-center justify-between p-4 md:p-6'>
        <Logo />

        <div className='gap-8 items-center hidden sm:flex'>
          <Navbar />
          <ThemeToggle />
        </div>

        <MobileNav onToggleOpen={toggleOpen} open={open} />

        {open && (
          <div
            className='fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity'
            onClick={toggleOpen}
          />
        )}

        <div className='flex gap-4 sm:hidden'>
          <ThemeToggle />
          <button onClick={toggleOpen}>
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}
