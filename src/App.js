import React from 'react';
import './App.css';
import FormikContainer from './FormikContainer';
import Loginform from './Loginform';
import Registrationform from './Registrationform';
import Menupage from './Menupage';


function App() {
  return (
    <div className="App">
   <Loginform />
   <Registrationform />
   <FormikContainer/>
   <Menupage/>

    </div>
  );
}

export default App;