import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./views/Home"
import Navbar from "./components/Navbar";
import Profile from "./views/Profile";
import injectContext from "./store/appContext";

const App = () => {
  return <>
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile/:type/:id" element={<Profile/>} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  </Router>
  </>
}
export default injectContext(App);
