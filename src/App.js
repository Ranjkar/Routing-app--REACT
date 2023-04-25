import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRouter";
import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";
import { auth, login } from "./utils/auth";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState( false );
  const location = useLocation();

  // Get redirect location or provide fallback
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate()
  useEffect( () => {
    ( async function ( params ) {
      let authobj = await auth()
      console.log( typeof authobj )
      setLoggedIn( authobj )
    } )()
  }, [] )
  const handleLogout = () => {
    localStorage.clear()
    setLoggedIn( false )
    navigate( { to: "/login" } )
  };
  const handleLogin = async ( username, password ) => {
    console.log( "Login==================>", username, password )
    let logged = await login( username, password );

    if ( logged ) {
      console.log( loggedIn, from )
      setLoggedIn( true )
      navigate( from, { replace: true } );
      // navigate(0)
    } else {
      alert( "Credentials fail" )
    }
  };

  return (
    <>

      <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route exact path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="*" element={<Link to="/" className="display-6 text-center mt-5 d-block text-decoration-none d-block h-100">Not found or not implemented yet. click to redirect home page</Link>} />
        <Route exact path="/dashboard" element={<PrivateRoutes  loggedIn={loggedIn} location={location} />} >

          <Route index element={<Dashboard />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
