import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css'
import './css/index.css';

import { App } from './components';

import { FilterSearchProvider } from './context/FilterSearch.context';

ReactDOM.render(
  <BrowserRouter>
    <FilterSearchProvider>
      <App />
    </FilterSearchProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

