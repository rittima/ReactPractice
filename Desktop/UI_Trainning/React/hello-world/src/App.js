import Welcome from './component/welcome';
import './App.css';
import Greet from './component/greet';
import Hello from './component/hello';
import Message from './component/message';
import Conter from './component/conter';
import ClickFunction from './component/ClickFunction';
import ClassClick from './component/ClassClick';
import EventBinding from './component/EventBinding';
import Parent from './component/Parent';
import UserGreet from './component/UserGreet';
import NameList from './component/NameList';
import StyleSheet from './component/StyleSheet';
import Inline from './component/Inline';
import './appStyle.css'
import styles from './appStyle.module.css'
import Form from './component/Form';
import LifecyclecomponentA from './component/LifecyclecomponentA';
import FragmentDemo from './component/FragmentDemo';
import Table from './component/Table';
import ParentComp from './component/ParentComp';
import ClickCounter from './component/ClickCounter';
import HoverCounter from './component/HoverCounter';
import { render } from '@testing-library/react';



function App() {
  
  return (
    <div className="App">

      <ClickCounter name='Rittima'/>
      <HoverCounter/>

      {/* <ParentComp/> */}
      {/* <Table/> */}
      {/* <FragmentDemo/> */}
      {/* <LifecyclecomponentA/> */}


      {/* <Conter/> */}
      {/* <Message></Message> */}
      {/* <Greet name="Rittima" place="Kolkata">
        <p>This is child props</p>
        </Greet>      
      <Greet name="Shreya" place="Chandighar">
        <button>Action</button>
      </Greet>
      <Greet name="Anuj" place="U.P"/>
      <Welcome name="Rittima" place="Kolkata"/> */}
      {/* <Welcome/> */}
      {/* <Hello/> */}

      {/* <ClickFunction></ClickFunction>
      <ClassClick></ClassClick> */}

      {/* <EventBinding></EventBinding> */}
      {/* <Parent></Parent> */}
      {/* <UserGreet></UserGreet> */}
      {/* <NameList></NameList> */}
      {/* <StyleSheet primary={true}></StyleSheet>
      <Inline></Inline> */}

      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}

      {/* <Form></Form> */}
      

    </div>
  );
}

export default App;
