function AllUsers({ users, hash }) {
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id} className={hash === user.id ? "selected" : ""}>
            <a href={`#${user.id === hash ? "" : user.id}`}>
             <h4>User {user.id} </h4>
            </a>
          </li>
        ))}
      </ul>
    );
  }
  
  export default AllUsers;
  