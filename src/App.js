import Nav from "./components/Nav";
import Home from "./Pages/Home"
import {Routes , Route } from "react-router-dom"
import { AuthProvider } from "./context/Authcontext";
import Signin from './Pages/Signin'
import SignUp from './Pages/SignUp'
import Account from "./Pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";




 


function App() {
  return (
    <>
    <AuthProvider>
    <Nav></Nav>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Signin></Signin>}></Route>
      <Route path="/signup" element={<SignUp></SignUp>}></Route>
      <Route path="/account" element={<ProtectedRoute><Account></Account></ProtectedRoute>}></Route>
      


    </Routes>
     
    </AuthProvider>
   


    
    
    </>
    
     
  );
}

export default App;
