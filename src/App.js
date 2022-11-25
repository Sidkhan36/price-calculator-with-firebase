import './App.css';
// import Form from './components/Form';
import { useReducer} from 'react';
import OurContext from './contexts/OurContext';
import DispatchContext from './contexts/DispatchContext';
import { initialState, dispatcher } from './contexts/reducer';
import LogIn from './pages/LogIn';
import data from './data'
import { Routes, Route } from "react-router-dom";
// import { Link, BrowserRouter, Switch } from "react-router-dom";
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Signup from "./pages/Signup"
import React from "react"
import { AuthProvider } from "./contexts/AuthContext"
import Dashboard from "./pages/Dashboard"
// import PrivateRoute from "./pages/PrivateRoute"
import ForgotPassword from "./pages/ForgotPassword"
import UpdateProfile from "./pages/UpdateProfile"
// import SuccessMessage from './pages/SuccessMessage';



function App() {
  const [state, dispatch] = useReducer(dispatcher, initialState)

  return (
    <DispatchContext.Provider value={dispatch}>
      <OurContext.Provider value={{ state, data }}>

        <div className="App">

          <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/LogIn" element={<LogIn />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/update-profile" element={<UpdateProfile />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              {/* <Route path="SuccessMessage" element={<SuccessMessage />} /> */}
            </Routes>

          </AuthProvider>
        </div>

      </OurContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;