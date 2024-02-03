import { useState, useEffect } from 'react';

const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log('hello from first useEffect');
  }, [value]);

  useEffect(() => {
    console.log('hello from second useEffect');
  }, [secondValue]);

  return (
    <div>
      <h1>Value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Value
      </button>

      <h1>Second value : {secondValue}</h1>
      <button className='btn' onClick={() => setSecondValue(secondValue + 1)}>
        Second value
      </button>
    </div>
  );
};

export default MultipleEffects;
