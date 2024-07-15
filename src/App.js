import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./webAppFiles/MainPage";
import Memorizing from "./webAppFiles/Memorizing";
import Listening from "./webAppFiles/Listening";
import Reading from "./webAppFiles/Reading";
import SalafQuotes from "./webAppFiles/SalafQuotes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/memorizing" element={<Memorizing />} />
        <Route path="/listening" element={<Listening />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/narrationsAboutSalaf" element={<SalafQuotes />} />
      </Routes>
    </Router>
  );
};

export default App;
