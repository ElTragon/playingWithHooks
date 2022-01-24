// import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function CustomUseLocalStorageHook() {
  //   const [task, setTask] = useState('');
  const [task, setTask] = useLocalStorage('task', ''); // single value
  const [tasks, setTasks] = useLocalStorage('tasks', []); // array of values

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('ssssssssss');

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObj]);
  };

  return (
    <>
      <form className='w-25' onSubmit={onSubmit}>
        <div className='mb-3'>
          <label className='form-label '>Task</label>
          <input
            type='text'
            className='text-black'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>

        <button className='btn btn-primary' type='submit'>
          Submit
        </button>
      </form>

      <hr />

      {tasks.map((task) => (
        <h3 key={task.date}>{task.task}</h3>
      ))}
    </>
  );
}

export default CustomUseLocalStorageHook;
