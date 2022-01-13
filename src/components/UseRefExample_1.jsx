import { useRef } from 'react';

function UseRefExample_1() {
  const inputRef = useRef();
  const paraRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = 'Hello World';
    inputRef.current.style.backgroundColor = 'red';
    paraRef.current.value = 'goodbye';
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          ref={inputRef}
          className='form-control mb-2'
        />
        <button className='btn btn-primary' type='submit'>
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          Hello
        </p>
      </form>
    </div>
  );
}

export default UseRefExample_1;
