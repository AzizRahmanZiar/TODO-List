function ProgressBar({ todos }) {
  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;
  const percentage =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className='mb-4'>
      <div className='flex justify-between items-center mb-2'>
        <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
          Progress
        </span>
        <span className='text-sm font-semibold text-indigo-600 dark:text-indigo-400'>
          {percentage}%
        </span>
      </div>
      <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden'>
        <div
          className='bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 h-3 rounded-full transition-all duration-700 ease-out'
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className='flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400'>
        <span>{completedCount} completed</span>
        <span>{totalCount - completedCount} remaining</span>
      </div>
    </div>
  );
}

export default ProgressBar;
