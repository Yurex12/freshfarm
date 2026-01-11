import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    () =>
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className='p-2 rounded-lg bg-muted text-foreground hover:bg-accent transition-colors cursor-pointer'
      aria-label='Toggle Theme'
    >
      {isDark ? (
        <Sun className='w-5 h-5 text-primary' />
      ) : (
        <Moon className='w-5 h-5 text-primary' />
      )}
    </button>
  );
}
