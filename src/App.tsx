import React from 'react';
import logo from './logo.svg';
import './App.css';
import BasicButtons from './button/button';
import { Button } from '@mui/material';
import FullWidthGrid from './components/grid/grid';

function App() {
  return (
    <div className="App">
      <Button>Click me</Button>
      <FullWidthGrid></FullWidthGrid>
    </div>


  );
}

export default App;
