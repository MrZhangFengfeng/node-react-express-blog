import React, { useState }from 'react';
import BlankLayout from './container/layout/layout'
import Login from './container/login/login'
import Register from './container/login/register'

function App() {
  const [loginState, setLoginState] = useState(false);
  const [register, setRegister] = useState(false);

  const getPage = () => {
    if(loginState) {
      return <BlankLayout />
    }else {
      if(register) {
        return <Register />
      } else {
        return <Login />
      }
    }

  }
  return (
      <div>
        {getPage()}
      </div>
  );
}

export default App;