import { TaskCard } from '../../components/TaskCard';
import { tasks } from '../../data/tasks';
import { FilterDropdown } from '../../components/FilterDropdown';

export default function Home() {
  return (
    <div className="min-h-screen p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">ALL TASK</h1>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
          CREATE
        </button>
      </div>
      <p className="text-sm text-gray-400 mb-6">Earn currency by completing tasks!</p>

      <div className="flex gap-3 mb-6">
        <FilterDropdown title="STATUS" options={['ALL', 'LIVE', 'COMING_SOON', 'COMPLETED']} />
        <FilterDropdown title="MY STATUS" options={['NEW', 'IN_PROGRESS', 'COMPLETED']} />
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
