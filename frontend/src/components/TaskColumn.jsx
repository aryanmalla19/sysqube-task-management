import React from 'react';
import defaultPP from "../assets/default-pfp.jpg";
import { FaAngleDoubleUp, FaAngleDoubleDown, FaEquals } from "react-icons/fa";

function TaskColumn({ title, tasks }) {
  const priorityIcon = {
    low: <FaAngleDoubleDown className="text-green-500" />,
    medium: <FaEquals className="text-yellow-500" />,     
    high: <FaAngleDoubleUp className="text-red-500" />,  
  };

  return (
    <div className='w-[32%] bg-[#f4f5f7] py-4 px-2 rounded-md shadow-sm mx-1'>
      <h2 className='font-semibold text-gray-700 text-sm mb-4 uppercase tracking-wide'>{title}</h2>
      <div className='space-y-3'>
        {tasks.map((task, idx) => (
          <div key={idx}
            className={`p-4 rounded-md bg-white border text-sm shadow-sm ${task.overdue ? 'border-red-500' : 'border-gray-200'}`}>
            <p className='text-gray-900 font-medium mb-1'>{task.title}</p>
            <div className='flex justify-between items-center text-gray-600'>
              <span className='text-xs'>{new Date(task.deadline).toLocaleString()}</span>
              <div className='flex items-center gap-1 text-xl'>
                {priorityIcon[task.priority]}
                <img className="w-8 h-8 rounded-full border border-gray-500" src={defaultPP} alt="default picture" srcset="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskColumn;
