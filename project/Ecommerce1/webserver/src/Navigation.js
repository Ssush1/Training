import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./Dashboard";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Productlist from "./Productlist";

function Navigation() {
  return (
    <div>
        (Navigation)
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/SignupPage" element={<SignupPage />}></Route>
          <Route path="/Dashboard" element={<SignupPage />}></Route>
          <Route path="/Productlist" element={<SignupPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
};
export default Navigation;