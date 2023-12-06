function SingleUser({user, onBack}) {

return (
    <>
        <h3>{user.name}</h3>
    <h4>{user.email}</h4>
    <h4>{user.phone}</h4>
    <button onClick={onBack}> Back to List</button>

    </>
)
}

export default SingleUser