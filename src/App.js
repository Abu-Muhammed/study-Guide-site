import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./webAppFiles/MainPage";
import MemorizationPage from "./webAppFiles/MemorizationPage";
import ReadingPage from "./webAppFiles/ReadingPage";
import ListeningClassesPage from "./webAppFiles/ListeningClassesPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/memorization" element={<MemorizationPage />} />
        <Route path="/reading" element={<ReadingPage />} />
        <Route path="/listening-classes" element={<ListeningClassesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
