import './App.scss';
import { Navbar } from './components/Navbar';
import { List } from './components/List';
// import { Popup } from './components/Popup';
// import { useState } from 'react';

function App() {
  //const[buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className='main'>
      <Navbar />
      <List />
      {/* <button onClick={() => setButtonPopup(true)}>open popup</button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup> */}
    </div>
  );
}

export default App;
