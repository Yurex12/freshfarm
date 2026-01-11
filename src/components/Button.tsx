import type { ComponentProps } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

type ButtonProps = {
  as?: 'button' | 'link';
  to?: string;
} & ComponentProps<'button'>;

export default function Button({
  children,
  as = 'button',
  to = '/',
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-semibold text-white transition hover:brightness-110 focus:outline-none';

  if (as === 'link') {
    return (
      <Link to={to} className={cn(baseStyles, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(baseStyles, className)} {...props}>
      {children}
    </button>
  );
}
