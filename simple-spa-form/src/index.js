import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SPARoutes from './Components/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router><SPARoutes/></Router>
);
