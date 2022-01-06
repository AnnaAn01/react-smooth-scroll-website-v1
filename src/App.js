import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
// we import this without the index.js part because it's called index.js, and there is no need for that.
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <Router>
      <Sidebar />
      <Navbar />
    </Router>
  );
}

export default App;
