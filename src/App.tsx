import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LandingPageView from "./LandingPageView";

export const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPageView />} />
      <Route path="/home" element={<LandingPageView />} />
      <Route path=":id" element={<LandingPageView />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default App;
