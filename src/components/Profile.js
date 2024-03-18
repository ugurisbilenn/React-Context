import {useContext,useState} from 'react';

import UserContext from '../context/UserContext';

const Profile = () => {
    const {user,setUser} = useContext(UserContext);
    
    const [loading, setLoading] = useState(false);

    const handleLogin = () =>{
        setLoading(true);
        setTimeout(() => {
            setUser({
                id:1,
                username:'Secdorent',
                bio:'lorem ipsumium'
            });
            setLoading(false);
        },1500);
    };
    
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
      <code>
        {loading && 'Loading...'}
        {JSON.stringify(user)}
      </code>
    </div>
  )
}

export default Profile
