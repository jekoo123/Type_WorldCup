import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import { Main } from './pages/main/main';
import { WorldCup } from './pages/worldcup/worldcup';
import { Ranking } from './pages/ranking/ranking';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route
          path="/"
          element={React.cloneElement(<Main/>)}
        />
        <Route
          path="/worldcup"
          element={React.cloneElement(<WorldCup/>)}
        />
        <Route
          path="/ranking"
          element={React.cloneElement(<Ranking/>)}
        />
      </Routes>
      <Footer/>
    </BrowserRouter>


    
  </React.StrictMode>
);

