import React from 'react';
import './App.css';
import Navbarmain from './components/navbar/Navbarmain';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Navbar from './components/navbar/Navbar';

function App() {

  //toggle mode
  const [darkmode, setDarkmode] = React.useState(getInitialMode());

  const toggleTheme = () => {
        setDarkmode(prevMode => !prevMode)
  }

  // store mode in local storage and user prefered mode.
  React.useEffect(()=>{
    localStorage.setItem("dark",JSON.stringify(darkmode));
  },[darkmode]);

  function getInitialMode(){
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    const userPreferDark = getPrefColorScheme();

    if(isReturningUser){
      return savedMode;
    }else if(userPreferDark){
      return true;
    }else{
      return false;
    }
  }

  function getPrefColorScheme(){
    if(!window.matchMedia) return;

    return (window.matchMedia("(prefers-color-scheme : dark)"));
  }

//toggle mode---end

  return (
    <ThemeProvider theme={darkmode? darkTheme :lightTheme}>
    <>
     <GlobalStyles/>
     <Navbarmain toggleTheme ={toggleTheme} darkmode={darkmode}/>
     <Navbar darkmode={darkmode} />
   </>
   </ThemeProvider> 
    
  );
}

export default App;
