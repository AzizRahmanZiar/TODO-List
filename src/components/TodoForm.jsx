import { useState } from 'react';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input.trim());
      setInput('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col sm:flex-row gap-2 md:gap-3'
    >
      <div className='flex-1 relative'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='What needs to be done?'
          className='
            w-full px-4 py-3 md:py-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 
            focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none 
            focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 
            transition-all duration-200 bg-white dark:bg-gray-700 
            text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
            text-base md:text-lg
            pr-12 sm:pr-4
          '
          autoFocus
        />
        {/* Mobile add button inside input */}
        <button
          type='submit'
          className='
            sm:hidden absolute right-2 top-1/2 transform -translate-y-1/2
            px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white 
            font-semibold rounded-md hover:from-indigo-600 hover:to-purple-700 
            transition-all duration-200 shadow disabled:opacity-50 disabled:cursor-not-allowed
          '
          disabled={!input.trim()}
        >
          Add
        </button>
      </div>
      {/* Desktop add button */}
      <button
        type='submit'
        className='
          hidden sm:block px-6 py-3 md:px-8 md:py-4 
          bg-gradient-to-r from-indigo-500 to-purple-600 text-white 
          font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 
          transform hover:-translate-y-0.5 transition-all duration-200 
          shadow-lg hover:shadow-xl disabled:opacity-50 
          disabled:cursor-not-allowed disabled:transform-none
          text-base md:text-lg
        '
        disabled={!input.trim()}
      >
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
