import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from "./Components/User"

class App extends React.Component {
  render (){
    return (
      <div className="App">
       <User /> 
      </div>
    );
  }
  
}

export default App;
