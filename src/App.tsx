import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button } from 'react-bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

import NavBarComponent from "./components/nav-bar/nav-bar";
import PageHeaderComponent from "./components/page-header/page-header";
import EstablishmentInformationComponent from './components/screens/pharamaceutical-establishment/etablishment-inforamtion/establishment-information';
import ContactInformationComponent from './components/screens/pharamaceutical-establishment/contact-inforamtion/contact-information';

library.add(fab, faCheckSquare, faCoffee, faVolumeUp);

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <PageHeaderComponent />

      <EstablishmentInformationComponent />
      <ContactInformationComponent/>
      {/* <Button variant="primary">Primary</Button>{' '}

      <Button variant="primary" className="custom_btn">Primary</Button>{' '} */}
    </div >
  );
}

export default App;
