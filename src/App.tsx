import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StackMap } from './components/stack-map/Stack-map';
import { StackModules } from './components/stack-modules/Stack-modules';
import { ModalWrapper } from './components/modal-wrapper/Modal-wrapper';
import { Header } from './components/header/Header';

function App() {
  return (
    <Router>
      <ModalWrapper></ModalWrapper>
      <div className="app">
        <Header></Header>
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={<StackMap></StackMap>}
            >
            </Route>
            <Route
              path="/modules"
              element={<StackModules></StackModules>}
            >
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
