import defaultPP from "../assets/default-pfp.jpg";
import { FaAngleDoubleUp, FaAngleDoubleDown, FaEquals } from "react-icons/fa";
import { useDraggable } from '@dnd-kit/core';
import { useRef } from 'react';

const priorityIcon = {
    low: <FaAngleDoubleDown className="text-green-500 text-lg" />,
    medium: <FaEquals className="text-yellow-500 text-lg" />,
    high: <FaAngleDoubleUp className="text-red-500 text-lg" />,
};

const priorityLabel = {
    low: 'Low Priority',
    medium: 'Medium Priority',
    high: 'High Priority',
};

function TaskCard({ task, idx, setIsModalOpen, setSelectedTask }) {
  const { setNodeRef, transform, listeners, attributes } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  const dragStartTime = useRef(null);

  return (
    <div
      key={idx}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      onMouseDown={() => {
        dragStartTime.current = Date.now();
      }}
      onMouseUp={() => {
        const dragDuration = Date.now() - dragStartTime.current;
        if (dragDuration < 200) {
          setIsModalOpen(true);
          setSelectedTask(task);
        }
      }}
      className={`p-4 rounded-lg bg-white border-l-4 ${
        task.isOverdue ? 'border-red-500' : 'border-blue-400'
      } shadow-md cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-200`}
    >
      <div className="flex justify-between items-start">
        <p className="text-gray-900 font-semibold text-base mb-2">{task.title}</p>
        <div
          className="flex items-center gap-2 text-sm"
          title={priorityLabel[task.priority]}
        >
          {priorityIcon[task.priority]}
        </div>
      </div>
      <div className="flex justify-between items-center text-gray-500 text-xs">
        <span>
          {new Date(task.deadline).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          })}
        </span>
        <img
          className="w-8 h-8 rounded-full border border-gray-300 shadow-sm"
          src={defaultPP}
          alt="Assignee avatar"
        />
      </div>
      {task.isOverdue && (
        <span className="inline-block mt-2 text-xs text-red-600 font-medium bg-red-100 px-2 py-1 rounded-full">
          Overdue
        </span>
      )}
    </div>
  );
}


export default TaskCard