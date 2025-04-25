import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext);

  return (
    <div className="flex items-center justify-between p-2 border rounded dark:bg-gray-800">
      <span className={`flex-1 ${task.completed ? 'line-through text-gray-400' : ''}`}>
        {task.title}
      </span>
      <button
        onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
        className="text-green-500 hover:text-green-700"
      >
        ✔
      </button>
      <button
        onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}
        className="text-red-500 hover:text-red-700 ml-2"
      >
        ✖
      </button>
      <button
        onClick={() => dispatch({ type: 'EDIT_TASK', payload: task.id })}
        className="text-yellow-500 hover:text-yellow-700 ml-2"
      >
        --
      </button>
      
    </div>
  );
};

export default TaskItem;
