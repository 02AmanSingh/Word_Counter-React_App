//import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import WordCount from './Components/WordCount';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');
  const [txt, setTxt] = useState('Light Mode Enabled');
  const [myStyle, setStyle] = useState({
    color: 'black',
  })
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      setTxt('Dark Mode Enabled');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", 'Success');
      setStyle({
        color: 'white',
      })
    }
    else {
      setmode('light');
      setTxt(' Light Mode Enabled');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'Success');
      setStyle({
        color: 'black',
      })
    }
  }

  return (
    <>

      <BrowserRouter>
        <Navbar title='Navbar' mode={mode} toggleMode={toggleMode} txt={txt} myStyle={myStyle} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path='/'>
              <WordCount heading='Word Counter' /*showAlert='showAlert' mode={mode}*/ />
            </Route>
            <Route path='/about'>
              <About/>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
