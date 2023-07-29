import React, {useState} from "react";
import Login from "./Login";
const Profile = ({ user }) => {
    const [profileData, setProfileData] = useState(null);
  
    React.useEffect(() => {
      // Fetch the user profile data after successful login
      fetch(`https://dummyjson.com/users/${user.id}`)
        .then((res) => res.json())
        .then((data) => setProfileData(data));
    }, [user.id]);
  
    return (
      <div className="loginContainer">
        <div className="login">
        <h2>Welcome, {user.username}</h2>
        {profileData && (
          <div>
            <img src={profileData.image}/>
            <p className="details">Name: {profileData.firstName+" "+profileData.lastName}</p>
            <p className="details">Email: {profileData.email}</p>
            <p className="details">Date of Birth: {profileData.birthDate}</p>
            <p className="details"> Address: {profileData.address.address}</p>
            <p className="details"> City: {profileData.address.city+", "+profileData.address.state}</p>
          </div>
        )}
        </div>
      </div>
    );
  };
  
  export default Profile;
  