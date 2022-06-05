import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as BrowserRouter, Routes, Route }
  from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function App() {

  const [{ }, dispatch] = useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
   
    <div className="app">
    <BrowserRouter>
        
        <Routes>
          <Route path="/login" element={<>
            <Login />
          </>} />
          <Route path="/checkout" element={<>
            <Header />
            <Checkout />
          </>} />
          <Route path="/" element={<>
            <Header />
            <Home />
          </>} />
            
         
         
      </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
