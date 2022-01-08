import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
// we import this without the index.js part because it's called index.js, and there is no need for that.
import Home from "./pages";
function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
