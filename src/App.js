import React, { useState }from 'react';
import BlankLayout from './container/layout/layout'
import Login from './container/login/login'
import Register from './container/login/register'
import { Provider } from 'react-redux'
import store from '../src/redux/store'

function App() {
  const [loginState, setLoginState] = useState(true);
  const [register, setRegister] = useState(true);

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
      <Provider store={store}>
        {getPage()}
      </Provider>
  );
}

export default App;