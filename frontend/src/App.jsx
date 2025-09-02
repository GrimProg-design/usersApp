import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
