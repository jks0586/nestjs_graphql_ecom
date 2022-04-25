import { useState } from "react";
import Index from "./components/Index";
import AdminIndex from "./components/AdminIndex";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  let isLogin='';
  let is_Admin=';'
  if(localStorage.getItem('token')){
    isLogin=true;
  } else {
    isLogin=false;
  }
  if(localStorage.getItem('is_admin')){
    
    is_Admin=true;
  } else {
    is_Admin=false;
  }
  const [isLoggedIn, setLoggedIn ] = useState(isLogin);
  const [isAdmin, setAdmin ] = useState(is_Admin);


  return (
    <div id="wrapper">
    {isAdmin ? 
      <>
      <AdminIndex isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} isAdmin={isAdmin}  setAdmin={setAdmin} />
      </>
      :
      <>
      <Index isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} isAdmin={isAdmin}  setAdmin={setAdmin} />
      </>
  }
  </div>
  );
}

export default App;
