import React, {useState} from "react"; 
import Login from "./components/Login";
import Profile from "./components/Profile";
import './styles/App.css'


const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  return (
    <div className="App">
      {!user ? <Login onLogin={handleLogin} /> : <Profile user={user} />}
    </div>
  );
};

export default App;

