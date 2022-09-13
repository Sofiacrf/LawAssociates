import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBarComponent from './components/NavBarComponent';
import FooterComponent from './components/FooterComponent';
import RouteList from './routes';


function App() {
  return (
   <Router>
    <NavBarComponent/>
    <RouteList />
    <FooterComponent/>
   </Router>
  );
}

export default App;
