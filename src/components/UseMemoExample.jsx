import { useState, useRef, useMemo, useEffect } from 'react';

function UseMemoExample() {
  const [number, setNumber] = useState(0);
  const [inc, setInc] = useState(1);

  const renders = useRef(1);

  const sqrt = useMemo(() => getSqrt(number), [number]);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <div>
      <h2 className='my-3'>Square root: {sqrt}</h2>
      <input
        type='number'
        className='form-control w-25'
        onChange={(e) => setNumber(e.target.value)}
      />
      <button className='btn btn-primary' onClick={onClick}>
        Re-render
      </button>
      <h3>Renders: {renders.current}</h3>
    </div>
  );
}

function getSqrt(num) {
  console.log('Expensive function called');
  for (let i = 1; i <= 10000; i++) {
    console.log(i);
  }
  return Math.sqrt(num);
}

export default UseMemoExample;
