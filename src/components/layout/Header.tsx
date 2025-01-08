import { FC } from 'react';

interface HeaderProps {
  /** Handler for adding a new task */
  onAddTask: () => void;
  /** Handler for editing existing task */
  onEditTask: () => void;
}

export const Header = ({ onAddTask, onEditTask }: HeaderProps) => {
  const handleAddTask = () => {
    onAddTask();
  };

  const handleEditTask = () => {
    onEditTask();
  };

  return (
    <header className="fixed top-0 w-full bg-[#333333] text-white px-4 py-3 shadow-lg">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-semibold">TaskMaster</h1>
        
        <div className="flex gap-6">
          <button
            onClick={handleAddTask}
            className="hover:text-gray-300 transition-colors duration-200 focus:outline-none 
              focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-[#333333] 
              rounded px-2 py-1"
            aria-label="Add new task"
          >
            Add Task
          </button>
          <button
            onClick={handleEditTask}
            className="hover:text-gray-300 transition-colors duration-200 focus:outline-none 
              focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-[#333333] 
              rounded px-2 py-1"
            aria-label="Edit existing task"
          >
            Edit Task
          </button>
        </div>
      </nav>
    </header>
  );
};
