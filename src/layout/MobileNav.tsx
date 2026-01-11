import { X } from 'lucide-react';
import { links } from '../constants';
import { NavLink } from 'react-router-dom';

export default function MobileNav({
  onToggleOpen,
  open,
}: {
  open: boolean;
  onToggleOpen: VoidFunction;
}) {
  return (
    <div
      className={`fixed top-0 h-full w-64 bg-background shadow-xl flex flex-col space-y-2 transition-all duration-300 z-50 ${
        open ? 'right-0' : '-right-full'
      }`}
    >
      <div className='flex items-center justify-end  p-2'>
        <button
          className='p-2 rounded-full hover:bg-background/10 transition-colors'
          onClick={onToggleOpen}
        >
          <X />
        </button>
      </div>

      <ul className='flex flex-col gap-y-1 px-4'>
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              onClick={onToggleOpen}
              className={({ isActive }) =>
                `block w-full px-2 py-2 text-base rounded-md transition-colors
           border-l-4
           ${
             isActive
               ? 'bg-muted border-primary text-foreground font-medium'
               : 'border-transparent text-muted-foreground hover:bg-muted/60 hover:text-foreground'
           }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
