import React, { useState } from 'react';
import TaskColumn from './TaskColumn';
import { FaBolt } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';

const allTasks = [
  { title: 'Design login UI', deadline: '2025-05-30T12:00', priority: 'high', status: 'todo', overdue: false },
  { title: 'Set up DB schema', deadline: '2025-05-25T09:00', priority: 'medium', status: 'in-progress', overdue: true },
  { title: 'Deploy app', deadline: '2025-05-27T14:00', priority: 'low', status: 'done', overdue: false },
];

function TaskLayout() {
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('deadline');
  const [searchTerm, setSearchTerm] = useState('');

  const filterAndSortTasks = (status) => {
    let filtered = allTasks.filter(task => (status === 'all' || task.status === status));

    if (priorityFilter !== 'all') {
      filtered = filtered.filter(task => task.priority === priorityFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (sortBy === 'deadline') {
      filtered.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    } else if (sortBy === 'priority') {
      const priorityRank = { low: 1, medium: 2, high: 3 };
      filtered.sort((a, b) => priorityRank[a.priority] - priorityRank[b.priority]);
    }

    return filtered;
  };

  return (
    <div className='container mx-auto px-6'>
      {/* Header */}
      <div className='flex items-center justify-between mt-5 mb-3'>
        <div>
          <h3 className='text-sm text-gray-500'>Projects / Coding</h3>
          <h1 className='text-3xl font-semibold text-gray-800'>ARV Board</h1>
        </div>

        <div className='flex items-center gap-6'>
          <div className='flex items-center text-gray-600 gap-2'>
            <FaBolt className='text-blue-600' />
            <span>4 days remaining</span>
          </div>
          <button className='bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700'>Complete sprint</button>
        </div>
      </div>

      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center gap-2'>
          {[1, 2, 3].map((_, i) => (
            <img
              key={i}
              src={`https://i.pravatar.cc/150?img=${i + 1}`}
              alt='user avatar'
              className='w-8 h-8 rounded-full border border-white shadow-sm'
            />
          ))}
          <span className='w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-xs'>+3</span>
        </div>

        <div className='flex items-center gap-3'>
          <div className='relative'>
            <IoSearch className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-400' />
            <input
              type='text'
              placeholder='Search tasks...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='pl-8 pr-3 py-1 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-300'
            />
          </div>

          <select className='px-3 py-1 rounded text-sm border focus:outline-none focus:ring-2 focus:ring-blue-300' value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
            <option value="all">All Priorities</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <select className='px-3 py-1 rounded text-sm border focus:outline-none focus:ring-2 focus:ring-blue-300' value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="all">All Statuses</option>
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>

          <select className='px-3 py-1 rounded text-sm border focus:outline-none focus:ring-2 focus:ring-blue-300' value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="deadline">Sort by Deadline</option>
            <option value="priority">Sort by Priority</option>
          </select>
        </div>
      </div>

      <div className='flex gap-4'>
        <TaskColumn title="TO DO" tasks={filterAndSortTasks('todo')} />
        <TaskColumn title="IN PROGRESS" tasks={filterAndSortTasks('in-progress')} />
        <TaskColumn title="DONE" tasks={filterAndSortTasks('done')} />
      </div>
    </div>
  );
}

export default TaskLayout;
