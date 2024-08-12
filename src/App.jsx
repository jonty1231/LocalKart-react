// import { useEffect } from "react";
// import axios from 'axios'
import Header from "./components/Header";
import {BrowserRouter, Route, Router ,Routes} from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Productpage from "./pages/Productpage";
import Cart from "./pages/Cart";
import SallerPage from "./pages/SallerPage";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Searchpage from "./pages/Searchpage";
function App() {

  return (
 
  <>

  <BrowserRouter>
  
  <Routes>
  <Route path="/" element={<Header />} >
     <Route path="/" element={<Homepage />} />
       <Route  path="/product/:id" element={<Productpage />} />
       <Route path="/cart" element={<Cart />}  />
       <Route path="/saller" element={<SallerPage />} />
       <Route path="/:search" element={<Searchpage />} />
  </Route>

<Route  path="/login"  element={<Login />}/>
  </Routes>

  </BrowserRouter>
<ToastContainer 
position="top-center"
autoClose={1000}/>


  </>
  )
}

export default App
