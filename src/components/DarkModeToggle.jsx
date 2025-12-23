import { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('darkMode') === 'true' ||
        window.matchMedia('(prefers-color-scheme: dark)').matches
      );
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <>
      {/* Mobile bottom bar toggle */}
      <div className='sm:hidden fixed bottom-6 right-4 z-20'>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className='
            p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl 
            transition-all duration-200 flex items-center justify-center
            border border-gray-200 dark:border-gray-700
          '
          title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? (
            <svg
              className='w-5 h-5 text-yellow-500'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                clipRule='evenodd'
              />
            </svg>
          ) : (
            <svg
              className='w-5 h-5 text-blue-400'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop top right toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className='
          hidden sm:block fixed top-4 right-4 p-3 rounded-full 
          bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl 
          transition-all duration-200 z-10 group
          border border-gray-200 dark:border-gray-700
        '
        title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <div className='relative w-6 h-6'>
          {/* Sun icon */}
          <svg
            className={`w-6 h-6 text-yellow-500 transition-all duration-300 absolute top-0 left-0 ${
              darkMode ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
            }`}
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path
              fillRule='evenodd'
              d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
              clipRule='evenodd'
            />
          </svg>

          {/* Moon icon */}
          <svg
            className={`w-6 h-6 text-blue-400 transition-all duration-300 absolute top-0 left-0 ${
              darkMode ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
            }`}
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
          </svg>
        </div>

        <div
          className='
          absolute -bottom-10 left-1/2 transform -translate-x-1/2 
          px-2 py-1 bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-800 
          text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity 
          whitespace-nowrap pointer-events-none
        '
        >
          {darkMode ? 'Light mode' : 'Dark mode'}
        </div>
      </button>
    </>
  );
}

export default DarkModeToggle;
