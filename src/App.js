import './index.css';
import { useState } from 'react';
import UseRefExample1 from './components/UseRefExample1';
import UseRefExample2 from './components/UseRefExample2';
import UseRefExample3 from './components/UseRefExample3';
import UseMemoExample from './components/UseMemoExample';
import UseCallbackExample from './components/UseCallbackExample';
import CustomUseFetchHook from './components/CustomUseFetchHook';
import CustomUseLocalStorageHook from './components/CustomUseLocalStorageHook';
function App() {
  const [showEx1, setShowEx1] = useState(true);
  const [showEx2, setShowEx2] = useState(true);
  const [showEx3, setShowEx3] = useState(true);
  const [showEx4, setShowEx4] = useState(true);
  const [showEx5, setShowEx5] = useState(true);
  const [showEx6, setShowEx6] = useState(true);
  const [showEx7, setShowEx7] = useState(true);

  return (
    <div className='conatainer mt-5 '>
      <h1>Hooks</h1>
      <button onClick={() => setShowEx1(!showEx1)} className='btn btn-primary'>
        Show UseRef1
      </button>
      {!showEx1 && <UseRefExample1 />}
      <hr />
      <button onClick={() => setShowEx2(!showEx2)} className='btn btn-primary'>
        Show UseRef2
      </button>
      {!showEx2 && <UseRefExample2 />}
      <hr />
      <button onClick={() => setShowEx3(!showEx3)} className='btn btn-primary'>
        Show UseRef3
      </button>
      {!showEx3 && <UseRefExample3 />}
      <hr />
      <button onClick={() => setShowEx4(!showEx4)} className='btn btn-primary'>
        Show UseMemo
      </button>
      {!showEx4 && <UseMemoExample />}
      <hr />
      <button onClick={() => setShowEx5(!showEx5)} className='btn btn-primary'>
        Show UseCallbackExample
      </button>
      {!showEx5 && <UseCallbackExample />}
      <hr />
      <button onClick={() => setShowEx6(!showEx6)} className='btn btn-primary'>
        Show CustomUseFetchHook
      </button>
      {!showEx6 && <CustomUseFetchHook />}
      <hr />
      <button onClick={() => setShowEx7(!showEx7)} className='btn btn-primary'>
        Show CustomUseLocalStorageHook
      </button>
      {!showEx7 && <CustomUseLocalStorageHook />}
    </div>
  );
}

export default App;
