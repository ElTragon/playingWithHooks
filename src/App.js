import './App.css';
import UseRefExample1 from './components/UseRefExample1';
import UseRefExample2 from './components/UseRefExample2';
import UseRefExample3 from './components/UseRefExample3';
import UseMemoExample from './components/UseMemoExample';
import UseCallbackExample from './components/UseCallbackExample';
import CustomUseFetchHook from './components/CustomUseFetchHook';
import CustomUseLocalStorageHook from './components/CustomUseLocalStorageHook';
function App() {
  return (
    <div className='conatainer mt-5'>
      <h1>Hello</h1>
      <UseRefExample1 />
      <UseRefExample2 />
      <UseRefExample3 />
      <UseMemoExample />
      <UseCallbackExample />
      <CustomUseFetchHook />
      <CustomUseLocalStorageHook />

    </div>
  );
}

export default App;
