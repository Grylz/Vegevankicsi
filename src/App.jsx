import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {HajoLista} from './HajoLista';
import {HajoReszletek} from './HajoReszletek';
import {CsataResztvevok} from './CsataResztvevok';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Csatahajók</Link>
            <Link className="nav-link" to="/denmark-strait">A Denmark Strait csata</Link>
          </div>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<HajoLista />} />
          <Route path="/hajo/:name" element={<HajoReszletek />} />
          <Route path="/denmark-strait" element={<CsataResztvevok />} />
        </Routes>
      </div>
    </Router>
  );
}

export {App};