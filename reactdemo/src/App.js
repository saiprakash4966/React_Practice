import logo from './logo.svg';
import './App.css';
import Demo from './components/function/function';
import Message from './components/classComponent/message';
import Hello from './components/Hello';
import Greet from './components/props/props';
import Welcome from './components/state/state';
import Counter from './components/setState/counter';
import Name from './components/destruct/name';
import Company from './components/destruct/company';
import Click from './components/evenHandling/functionClick';
import ClassClick from './components/evenHandling/classClick';
import EventBind from './components/eventBind/classEventBind';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Programming
        </a>
      </header> */}
      {/* <Demo/>
      <Message/> 
      <Hello/>*/}
      {/* <Message name="Saiprakash"/>
      <Message name="Raghu"/>
      <Message name="Venkatesh"/>
      <Greet  name="Saiprakash">
      <p>This is children props</p></Greet>
      <Greet name ="Raghu"/>
      <Greet name="Venkatesh">
       <button>Action</button> </Greet> */}
       {/* <Welcome/> */}
      
     {/* <Counter/> */}
     {/* <Name   name="Saiprakash"  surname="Beemari"/>
     <Company name="Saiprakash" companyname="Bridglabz"/> */}

     {/* <Click/>
     <ClassClick/> */}
     <EventBind/>
    </div>
  );
}

export default App;
