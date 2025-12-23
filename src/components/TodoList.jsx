import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  if (todos.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center py-12 px-4 text-center space-y-4'>
        <div className='w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center'>
          <svg
            className='w-12 h-12 md:w-16 md:h-16 text-gray-400 dark:text-gray-600'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={1.5}
              d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
            />
          </svg>
        </div>
        <div>
          <h3 className='text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2'>
            No todos yet
          </h3>
          <p className='text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-md'>
            Add your first todo by typing in the input above. You can mark them
            as complete, edit, or delete them.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='space-y-3 md:space-y-4'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
