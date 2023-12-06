import { useState, useEffect } from 'react';
import AllUsers from './AllUsers';
import SingleUser from './SingleUser';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [hash, setHash] = useState(window.location.hash.slice(1) * 1);
  const user = users.find(user => hash === user.id);

  const resetHash = () => {
    setHash(null);
    window.location.hash = '';
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash.slice(1) * 1);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);



  return (
    <div>
      <h1>Contact List ({users.length})</h1>
      {user ? (
        <SingleUser user={user} onBack={resetHash}/> 
      ) : (
        <AllUsers users={users} hash={hash}/>
      )}
    </div>
  );
}

export default App;
