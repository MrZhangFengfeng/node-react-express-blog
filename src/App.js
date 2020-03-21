import React from 'react';
import BlankLayout from './container/layout/layout'
import Login from './container/login/login'

function App() {

  return (
      <div>
        {false ? <BlankLayout />: <Login />}
      </div>
  );
}

export default App;