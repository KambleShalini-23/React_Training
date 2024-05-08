import { Button } from "antd";
import { useState } from "react";

function Meeting(){
    var [users,setUsers] = useState(0);
    function joinMeeting(){
        setUsers(users +1)
    }
    function clearCount(){
        setUsers(0)
    }
    return(
        <><Button type='primary' onClick={joinMeeting}> Increment the count </Button>
            <p>The people Joined : {users}</p>
            <Button type='primary' onClick={clearCount}>Clear the count</Button></>
    )
}

export default Meeting