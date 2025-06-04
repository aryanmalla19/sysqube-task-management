import { useDroppable } from '@dnd-kit/core';
import TaskCard from './TaskCard';

function TaskColumn({ title, status, tasks, setIsModalOpen, setSelectedTask }) {
  const { setNodeRef } = useDroppable({
    id: status,
  })
  return (
    <div ref={setNodeRef} className="w-full sm:w-[32%] bg-white min-h-96 p-4 rounded-xl shadow-lg mx-2 my-4 transition-all duration-300 hover:shadow-xl bg-gradient-to-b from-gray-50 to-gray-100">
      <h2 className="font-bold text-lg text-gray-800 mb-6 uppercase tracking-wider border-b border-gray-200 pb-2">
        {title}
      </h2>
      <div  className="space-y-4">
        {tasks?.map((task, idx) => (<TaskCard key={task.id} task={task} setIsModalOpen={setIsModalOpen} setSelectedTask={setSelectedTask} idx={idx} />))}
      </div>
    </div>
  );
}

export default TaskColumn;