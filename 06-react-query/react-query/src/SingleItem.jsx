import { useDeleteTask, useEditTask } from './reactQueryCustomHooks';

/* eslint-disable react/prop-types */
const SingleItem = ({ item }) => {
  const { editTask } = useEditTask();
  const { deleteTask, deleteTaskPending } = useDeleteTask();

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.isDone}
        onChange={() => editTask({ taskId: item.id, isDone: item.isDone })}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        disabled={deleteTaskPending}
        onClick={() => deleteTask(item.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default SingleItem;
