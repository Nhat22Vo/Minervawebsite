import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { CaseStudyDetail } from "./components/CaseStudyDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/case-study/:slug"
          element={<CaseStudyDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
}