import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [text] = useState(''); // falsy
  const [name] = useState('Susan'); // truthy

  const codeExample = text || 'Hello world';

  // can't use if statements
  return (
    <div>
      {/* {if(someCondition){"won't work"}} */}

      <h4>Falsy OR : {text || 'Hello world'}</h4>
      <h4>Falsy AND {text && 'Hello world'}</h4>
      <h4>Truthy OR {name || 'Hello world'}</h4>
      <h4>Truthy AND {name && 'Hello world'}</h4>
      {codeExample}
    </div>
  );
};

export default ShortCircuitOverview;
