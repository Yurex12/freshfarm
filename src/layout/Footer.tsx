import { footerSections, socialLinks } from '../constants';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-muted'>
      <div className='mx-auto max-w-360 px-6 py-12'>
        <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12'>
          {/* Brand Section */}
          <div className='lg:col-span-4 space-y-6'>
            <Logo />
            <p className='text-muted-foreground leading-relaxed max-w-sm'>
              Agriculture provides wood for construction and paper, and in the
              early 1900s, U.S. farmers produced enough to sustain their
              communities.
            </p>
            <div className='flex items-center space-x-5'>
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className='text-muted-foreground hover:text-primary transition-colors'
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Link Columns */}
          <div className='lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8'>
            {footerSections.map((section) => (
              <div key={section.title} className='space-y-5'>
                <h3 className='text-sm font-bold uppercase tracking-wider text-foreground'>
                  {section.title}
                </h3>
                <ul className='space-y-3'>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className='text-muted-foreground hover:text-primary transition-all duration-200 block'
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-16 pt-8 border-t border-border/50'>
          <div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
            <p className='text-sm text-muted-foreground'>
              &copy; {currentYear}{' '}
              <span className='font-medium text-foreground'>Fresh Farm</span>.
              All rights reserved.
            </p>
            <div className='flex gap-6 text-xs text-muted-foreground uppercase tracking-widest'>
              <a href='#' className='hover:text-primary transition-colors'>
                Privacy Policy
              </a>
              <a href='#' className='hover:text-primary transition-colors'>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
