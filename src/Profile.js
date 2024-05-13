import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Profile() {
    var [name, setName] = useState();
    var [email, setEmail] = useState();

    useEffect(() => {
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    }, []); // Empty dependency array to ensure useEffect runs only once

    return (
        <div>
            <li><strong>Name:</strong> {name}</li>
            <li><strong>Email:</strong> {email}</li>
        </div>
    )
}

export default Profile;