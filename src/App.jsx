import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import DarkModeToggle from './components/DarkModeToggle';
import ProgressBar from './components/ProgressBar';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState('all');

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 md:p-8'>
      <DarkModeToggle />

      <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-lg p-6 md:p-8'>
        <header className='text-center mb-8'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2'>
            Todo List
          </h1>
          <div className='flex justify-center gap-6 mb-4'>
            <div className='text-center'>
              <div className='text-2xl font-bold text-indigo-600 dark:text-indigo-400'>
                {activeTodosCount}
              </div>
              <div className='text-sm text-gray-600 dark:text-gray-400'>
                Pending
              </div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-green-600 dark:text-green-400'>
                {completedCount}
              </div>
              <div className='text-sm text-gray-600 dark:text-gray-400'>
                Completed
              </div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-purple-600 dark:text-purple-400'>
                {todos.length}
              </div>
              <div className='text-sm text-gray-600 dark:text-gray-400'>
                Total
              </div>
            </div>
          </div>
        </header>

        <main className='space-y-6'>
          <TodoForm addTodo={addTodo} />

          <ProgressBar todos={todos} />

          <FilterButtons
            currentFilter={filter}
            setFilter={setFilter}
            clearCompleted={clearCompleted}
            hasCompleted={todos.some((todo) => todo.completed)}
          />

          <TodoList
            todos={filteredTodos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />

          {todos.length === 0 && (
            <div className='text-center py-10'>
              <div className='text-gray-400 dark:text-gray-600 mb-4'>
                <svg
                  className='w-16 h-16 mx-auto'
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
              <p className='text-gray-500 dark:text-gray-400 text-lg'>
                No todos yet. Add one above!
              </p>
              <p className='text-gray-400 dark:text-gray-500 text-sm mt-2'>
                Try adding "Learn React" or "Build a Todo App"
              </p>
            </div>
          )}

          {todos.length > 0 && filteredTodos.length === 0 && (
            <div className='text-center py-10'>
              <div className='text-gray-400 dark:text-gray-600 mb-4'>
                <svg
                  className='w-16 h-16 mx-auto'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <p className='text-gray-500 dark:text-gray-400 text-lg'>
                {filter === 'active'
                  ? 'No active todos! Great job!'
                  : 'No completed todos yet. Keep going!'}
              </p>
              <button
                onClick={() => setFilter('all')}
                className='mt-4 px-4 py-2 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors'
              >
                View All Todos
              </button>
            </div>
          )}
        </main>

        <footer className='mt-8 pt-6 border-t border-gray-200 dark:border-gray-700'>
          <div className='text-center text-sm text-gray-500 dark:text-gray-400'>
            <p>
              Drag to reorder • Double-click to edit • {todos.length} item
              {todos.length !== 1 ? 's' : ''}
            </p>
            <div className='mt-2 flex justify-center gap-4'>
              <span className='flex items-center gap-1'>
                <div className='w-3 h-3 rounded-full bg-green-500'></div>
                Active
              </span>
              <span className='flex items-center gap-1'>
                <div className='w-3 h-3 rounded-full bg-gray-400'></div>
                Completed
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
