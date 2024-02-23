import { useState } from 'react';

/* eslint-disable react/prop-types */
const SingleItem = ({ item, removeItem, editItem }) => {
  const [isChecked] = useState(item.completed);

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p style={{ textDecoration: isChecked && 'line-through' }}>{item.name}</p>

      <button
        className='btn remove-btn'
        type='button'
        onClick={() => removeItem(item.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default SingleItem;
