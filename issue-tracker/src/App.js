import logo from './logo.svg';
import './App.css';
import React from 'react';

import HeaderComponent from "./components/HeaderComponent";
import IssueListComponent from "./components/IssueListComponent";
import FooterComponent from './components/FooterComponent';



function App() {
  return (
    <React.Fragment>
      <HeaderComponent />
      <IssueListComponent />
      <FooterComponent/>
    </React.Fragment>
  );
}
export default App;