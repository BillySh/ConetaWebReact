import React from 'react';
import './App.css';
import Example from './components/Example';
import CreateEntregaForm from './components/createEntregaForm';
import TableComponent from './components/Table';
import Add from './components/Add';
import { createRoot } from "react-dom/client";



function App() {
  return (
    <div className="App">

      <React.StrictMode>
        <CreateEntregaForm></CreateEntregaForm>
      </React.StrictMode>
    </div>
  );
}

export default App;