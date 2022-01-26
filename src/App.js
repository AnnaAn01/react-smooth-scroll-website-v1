import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// we import this without the index.js part because it's called index.js, and there is no need for that.
import Home from "./pages";
import SigninPage from "./pages/Signin";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </Router>
  );
}

export default App;
