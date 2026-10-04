import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OICQuestions from "./pages/OICQuestions";
import VBCSQuestions from "./pages/VBCSQuestions";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/oic-interview-questions"
          element={<OICQuestions />}
        />

        <Route
          path="/vbcs-interview-questions"
          element={<VBCSQuestions />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;