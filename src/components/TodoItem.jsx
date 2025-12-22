import { useState } from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim()) {
      editTodo(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <div
      className={`
      flex items-center gap-4 p-4 rounded-xl transition-all duration-200
      ${
        todo.completed
          ? 'bg-gray-50 dark:bg-gray-700/50'
          : 'bg-white dark:bg-gray-800'
      }
      border border-gray-100 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500
      hover:shadow-lg dark:hover:shadow-indigo-900/20 transform hover:-translate-y-0.5
      ${isEditing ? 'ring-2 ring-indigo-300 dark:ring-indigo-500' : ''}
    `}
    >
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className='w-5 h-5 text-indigo-600 dark:text-indigo-400 rounded focus:ring-indigo-500 dark:focus:ring-indigo-400 cursor-pointer bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600'
      />

      {isEditing ? (
        <input
          type='text'
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          className='flex-1 px-3 py-2 border-2 border-indigo-300 dark:border-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 bg-white dark:bg-gray-700 text-gray-900 dark:text-white'
          autoFocus
        />
      ) : (
        <span
          className={`
            flex-1 cursor-pointer select-none break-words transition-colors
            ${
              todo.completed
                ? 'line-through text-gray-400 dark:text-gray-500'
                : 'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white'
            }
          `}
          onDoubleClick={() => setIsEditing(true)}
        >
          {todo.text}
        </span>
      )}

      <div className='flex gap-2'>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className={`
            p-2 rounded-lg transition-colors
            ${
              isEditing
                ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-300'
            }
          `}
          title={isEditing ? 'Cancel' : 'Edit'}
        >
          {isEditing ? (
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
              />
            </svg>
          )}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className='p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors'
          title='Delete'
        >
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
