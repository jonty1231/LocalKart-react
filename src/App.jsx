// import { useEffect } from "react";
// import axios from 'axios'
import Header from "./components/Header";
import {BrowserRouter, Route, Router ,Routes} from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Productpage from "./pages/Productpage";
import Cart from "./pages/Cart";

function App() {

  return (
 
  <>

  <BrowserRouter>
  
  <Routes>
  <Route path="/" element={<Header />} >
     <Route path="/" element={<Homepage />} />
       <Route  path="/product/:id" element={<Productpage />} />
       <Route path="/cart" element={<Cart />}  />
  </Route>

<Route  path="/login"  element={<Login />}/>
  </Routes>

  </BrowserRouter>
  </>
  )
}

export default App
