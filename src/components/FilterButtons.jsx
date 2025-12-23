function FilterButtons({
  currentFilter,
  setFilter,
  clearCompleted,
  hasCompleted,
}) {
  const filters = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' },
  ];

  return (
    <div className='flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 py-3 sm:py-4 px-2 sm:px-0 border-b border-gray-200 dark:border-gray-700'>
      <div className='flex gap-1 sm:gap-2 w-full sm:w-auto'>
        {filters.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`
              flex-1 sm:flex-none px-2 sm:px-4 py-2 sm:py-2 rounded-lg transition-all duration-200 font-medium text-sm sm:text-base
              ${
                currentFilter === key
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }
            `}
          >
            <span className='hidden xs:inline'>{label}</span>
            <span className='xs:hidden'>
              {key === 'all' ? 'All' : key === 'active' ? 'Active' : 'Done'}
            </span>
          </button>
        ))}
      </div>

      {hasCompleted && (
        <button
          onClick={clearCompleted}
          className='w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg hover:from-red-600 hover:to-pink-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg font-medium text-sm sm:text-base mt-2 sm:mt-0'
        >
          <span className='hidden sm:inline'>Clear Completed</span>
          <span className='sm:hidden'>Clear Done</span>
        </button>
      )}
    </div>
  );
}

export default FilterButtons;
