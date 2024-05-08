import { Alert, Card } from "antd"

function UserList(){
    var users = [
        {name: "Shalini",id:"4143"},
        {name: "Kamble",id: "7986",location:"Hyderabad"}
    ]
    if(users.length === 0){
        return(
            <Alert message ="No results Found"> </Alert>
        )
    }
    else{
        return (
            <>
            <label>the List of users :</label>
            {users.map(user => {
                var keys = Object.keys(user)
            return(
                <Card>
                {
                keys.map((eachuser) => { 
                    return (
                    <p>{user[eachuser]}</p>
                    )}) 
                }
                {/* // <><Alert message={user.name} type="success"></Alert>
                // <Alert message={user.id} type="success"></Alert>
                // <Alert message={user.location} type="success"></Alert>
                // <br></br></> */}
            </Card>
            )})
        }
        </>
        )
    }
    
}

export default UserList