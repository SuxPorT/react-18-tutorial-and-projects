import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    hobby: 'ready books',
  });

  const displayPerson = () => {
    setPerson({ name: 'John', age: 28, hobby: 'scream at the computer' });
    // setPerson({ ...person, name: 'susan' });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys to {person.hobby}</h4>

      <button className='btn' onClick={displayPerson}>
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
