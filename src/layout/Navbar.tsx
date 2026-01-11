import { NavLink } from 'react-router-dom';
import { links } from '../constants';

export default function NavBar() {
  return (
    <nav>
      <ul className='flex space-x-12'>
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `${
                  isActive ? 'border-b-primary' : ''
                } cursor-pointer border-2 border-background py-1 hover:border-b-primary`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
