import { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log('hello there');
  };

  sayHello();

  useEffect(() => {
    console.log('hello from useEffect');
  }, []);

  return (
    <div>
      <h1>Value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </div>
  );
};

export default UseEffectBasics;
