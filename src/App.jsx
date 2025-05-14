import { Outlet } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "animate.css/animate.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Footer from './footer/Footer';
import HomeNavbar from './header/HomeNavbar';


function App() {

  return (
    <>
      <HomeNavbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
