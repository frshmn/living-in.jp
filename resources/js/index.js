import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { App, Q1, Q2 } from "./routes/index";

const rootElement = document.getElementById("app");
render(
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/q1" element={<Q1 />} />
      <Route path="/q2" element={<Q2 />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
