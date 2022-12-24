import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/UseStateHook/ClassCounter';
import HookCounter from './components/UseStateHook/HookCounter';
import HookCounters from './components/UseStateWithPreviousState/HookCounters';
import ClassCounters from './components/UseStateWithPreviousState/ClassCounters';
import HookCounterTwo from './components/UseStateWithObject/HookCounterTwo';
import HookCounterThree from './components/UseStateWithArray/HookCounterThree';

function App() {
  return (
    <div className="App">
     
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounters/> */}
      {/* <ClassCounters/> */}
      {/* <HookCounterTwo/> */}
      <HookCounterThree/>
    </div>
  );
}

export default App;
