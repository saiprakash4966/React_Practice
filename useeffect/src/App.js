import logo from './logo.svg';
import './App.css';
import HookCounterOne from './components/useEffect_After_render/HookCounterOne';
import ClassCounterOne from './components/useEffect_After_render/ClassCounterOne';
import HookCounterEx from './components/useEffect_After_render/HookCounterEx';
import ClassCounter from './components/Conditionally run effects/ClassCounter';
import HookCounter from './components/Conditionally run effects/HookCounter';
import HookCounterExample from './components/Conditionally run effects/HookCounterExample';
import ClassMouse from './components/Run effects only once/ClassMouse';
import HookMouse from './components/Run effects only once/HookMouse';
import HookMouseEx from './components/Run effects only once/HookMouseEx';
import MouseContainer from './components/useEffect_Clean_Up/MouseContainer';
import MouseContainerEx from './components/useEffect_Clean_Up/MouseContainerEx';
import IntervalClassCounter from './components/useEffect Incorrect Depenedency/IntervalClassCounter';
import IntervalHookCounter from './components/useEffect Incorrect Depenedency/IntervalHookCounter';
import IntervalHookExample from './components/useEffect Incorrect Depenedency/IntervalHookExample';
import DataFetching from './components/Data Fetching/DataFetching';
import DataFetchingPractice from './components/Data Fetching/DataFetchingPractice';
import IndividualDataFetch from './components/Data Fetching/IndividualDataFetch';
import ButtonclickDataFetch from './components/Data Fetching/ButtonclickDataFetch';

function App() {
  return (
    <div className="App">
      {/* <HookCounterOne/> */}
      {/* <ClassCounterOne/> */}
      {/* <HookCounterEx/> */}
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterExample/> */}
      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      {/* <HookMouseEx/> */}
      {/* <MouseContainer/> */}
      {/* <MouseContainerEx/> */}
      {/* <IntervalClassCounter/> */}
      {/* <IntervalHookCounter/> */}
      {/* <IntervalHookExample/> */}
      {/* <DataFetching/> */}
      {/* <DataFetchingPractice/> */}
      {/* <IndividualDataFetch/> */}
      <ButtonclickDataFetch/>
    </div>
  );
}

export default App;
