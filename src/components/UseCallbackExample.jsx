import { useState, useCallback } from 'react';

function UseCallbackExample() {
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    setTasks((prevState) => [...prevState, 'some task again']);
  };

  return (
    <div>
      <Button addTask={addTask}></Button>
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
}

const Button = ({ addTask }) => {
  console.log('button');
  return (
    <div>
      <button className='btn btn-primary' onClick={addTask}>
        Add Task
      </button>
    </div>
  );
};

export default UseCallbackExample;
