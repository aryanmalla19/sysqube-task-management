// src/components/TaskColumn.js
import React from 'react';

function TaskColumn({ title, tasks }) {
  return (
    <div className='w-[32%] bg-gray-100 p-4 rounded shadow-md mx-1'>
      <h2 className='text-xl font-semibold mb-4'>{title}</h2>
      <div className='space-y-3'>
        {tasks.map((task, idx) => (
          <div key={idx} className={`p-3 rounded border ${task.overdue ? 'border-red-500' : 'border-gray-300'}`}>
            <p className='font-medium'>{task.title}</p>
            <div className='text-sm text-gray-600 flex justify-between'>
              <span>{task.deadline}</span>
              <span className={`px-2 py-1 rounded text-white text-xs ${{
                low: 'bg-green-500',
                medium: 'bg-yellow-500',
                high: 'bg-red-500'
              }[task.priority]}`}>{task.priority}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskColumn;
