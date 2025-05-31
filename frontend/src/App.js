import './App.css';
import TaskColumn from './components/TaskColumn';

const tasks = [
  { title: 'Design login UI', deadline: '2025-05-30', priority: 'high', overdue: false },
  { title: 'Set up DB schema', deadline: '2025-05-25', priority: 'medium', overdue: true }
];

function App() {
  return (
    <div className='container mx-auto p-4 flex justify-between'>
      <TaskColumn title="To Do" tasks={tasks} />
      <TaskColumn title="In Progress" tasks={[]} />
      <TaskColumn title="Completed" tasks={tasks} />
    </div>
  );
}

export default App;
