import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./webAppFiles/MainPage";
import Memorizing from "./webAppFiles/Memorizing";
import Listening from "./webAppFiles/Listening";
import Reading from "./webAppFiles/Reading";
import SalafQuotes from "./webAppFiles/SalafQuotes";
import Level01 from "./webAppFiles/Level01";
import Level02 from "./webAppFiles/Level02";
import Level03 from "./webAppFiles/Level03";
import Level04 from "./webAppFiles/Level04";
import Level05 from "./webAppFiles/Level05";
import Level06 from "./webAppFiles/Level06";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/memorizing" element={<Memorizing />} />
        <Route path="/listening" element={<Listening />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/reading/level01" element={<Level01 />} />
        <Route path="/reading/level02" element={<Level02 />} />
        <Route path="/reading/level03" element={<Level03 />} />
        <Route path="/reading/level04" element={<Level04 />} />
        <Route path="/reading/level05" element={<Level05 />} />
        <Route path="/reading/level06" element={<Level06 />} />
        <Route path="/narrationsAboutSalaf" element={<SalafQuotes />} />
      </Routes>
    </Router>
  );
};

export default App;
