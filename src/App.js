import React from 'react';
import Landing from './pages/Landing/Landing';
import { Switch, Route } from 'react-router-dom';
import Price from './pages/Price/Price';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/price" component={Price} />
    </Switch>
  );
}

export default App;
