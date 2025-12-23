function ProgressBar({ todos }) {
  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;
  const percentage =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // New responsive feature: Progress indicator circles
  const getProgressLevel = () => {
    if (percentage === 0) return 'Not Started';
    if (percentage < 25) return 'Getting Started';
    if (percentage < 50) return 'Making Progress';
    if (percentage < 75) return 'Almost There';
    if (percentage < 100) return 'Nearly Done';
    return 'All Done!';
  };

  return (
    <div className='mb-4 md:mb-6'>
      {/* Progress header with responsive layout */}
      <div className='flex flex-col xs:flex-row justify-between items-start xs:items-center gap-2 mb-2'>
        <div>
          <span className='text-sm md:text-base font-medium text-gray-700 dark:text-gray-300'>
            Progress
          </span>
          <span className='block xs:hidden text-xs text-gray-500 dark:text-gray-400 mt-1'>
            {getProgressLevel()}
          </span>
        </div>
        <div className='flex items-center gap-3'>
          <span className='text-sm md:text-base font-semibold text-indigo-600 dark:text-indigo-400'>
            {percentage}%
          </span>
          <span className='hidden xs:block text-xs text-gray-500 dark:text-gray-400'>
            {getProgressLevel()}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 md:h-3 overflow-hidden mb-2'>
        <div
          className='bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 h-2 md:h-3 rounded-full transition-all duration-700 ease-out'
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Progress stats with responsive layout */}
      <div className='flex flex-col xs:flex-row justify-between items-start xs:items-center gap-1 xs:gap-0'>
        <div className='flex items-center gap-2'>
          <span className='text-xs text-gray-500 dark:text-gray-400'>
            {completedCount} completed
          </span>
          <span className='hidden sm:inline text-xs text-gray-400 dark:text-gray-500'>
            •
          </span>
          <span className='hidden sm:inline text-xs text-gray-500 dark:text-gray-400'>
            {totalCount - completedCount} remaining
          </span>
        </div>
        <div className='text-xs text-gray-500 dark:text-gray-400'>
          {totalCount} total
        </div>
      </div>

      {/* Mobile only: Visual progress indicators */}
      <div className='flex sm:hidden justify-center gap-1 mt-3'>
        {[...Array(5)].map((_, i) => {
          const segment = Math.floor(percentage / 20);
          const isFilled = i < segment;
          return (
            <div
              key={i}
              className={`w-1/5 h-1 rounded-full ${
                isFilled
                  ? 'bg-gradient-to-r from-green-400 to-purple-600'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProgressBar;
