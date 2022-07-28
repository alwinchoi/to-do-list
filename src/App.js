import logo from './logo.svg';
import './App.css';
import ToDoList from './Component/ToDoList';
import Modal from './Component/modal';
import Table from './Component/table';

import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="App App-header">
      {/* <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ToDoList onSelect={setIsOpen}>
        sth
        {/* add table here and pass data */}
      </ToDoList>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <Table />
      </Modal>
    </div>
  );
}

export default App;
