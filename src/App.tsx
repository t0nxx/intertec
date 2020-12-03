import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button } from 'react-bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

import NavBarComponent from "./components/nav-bar/nav-bar";
import PageHeaderComponent from "./components/page-header/page-header";

library.add(fab, faCheckSquare, faCoffee, faVolumeUp);

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <PageHeaderComponent />

      <Button variant="primary">Primary</Button>{' '}

      <Button variant="primary" className="custom_btn">Primary</Button>{' '}
    </div >
  );
}

export default App;
