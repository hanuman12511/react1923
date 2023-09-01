import {BrowserRouter} from 'react-router-dom'
import Router from './view/router/Router';
import './view/style/style.css'
import {AuthContext} from './view/context/context'
import {addcart,totalpat,data} from './view/data/data'
function App() {


  return (
    <>
    <AuthContext.Provider value={{totalpat,addcart,data}}>
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
    </AuthContext.Provider>

    </>
   
  );
}

export default App;
 

/* import React, { Component } from 'react'
export default class App extends Component{

  render(){
    return(
    <>
    <h1>class</h1>
    </>
  )
    }
} */