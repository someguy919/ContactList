function SingleUser({user, onBack}) {

return (
    <>
        <h3>Name: {user.name}</h3>
    <h4>Email: {user.email}</h4>
    <h4>Phone Number: {user.phone}</h4>
    <button onClick={onBack}> Back to List</button>

    </>
)
}

export default SingleUser