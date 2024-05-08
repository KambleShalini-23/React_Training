import { Button, Col, Input, Layout } from "antd"
import { useState } from "react"
import Datatable from "./Datatable"
import axios from "axios"

function Signup() {
    var user = {}
    var [users,setUsers] = useState([])

    function deleteUser(index){
        console.log("this user has to be deleted" , index)
        users.splice(index,1)
        setUsers([...users])
    }
    
    function handleEmail(event) {
        user.email = event.target.value
    }
    function handleName(event) {
        user.name = event.target.value
        
    }
    function handlePassword(event) {
        user.password = event.target.value

    }

    function createAccount() {
        console.log("User details" , user)
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api" +"/register",
            method:"post",
            data:user
        }).then((response)=>{
            console.log("Response from register api" , response)
        },(error)=>{
            console.log("Error from register api is" , error)
        })
        
    }
    return (
        <>
            <Layout>
                <Layout  style={{background:"white",margin:"auto"}}>
                <Col style={{margin:"auto"}} span={18}>
                    <h1>Create An Account</h1>
                    <Input style={{marginTop:10}} placeholder="Email" onChange={handleEmail} />
                    <Input style={{marginTop:20}}  placeholder="Name" onChange={handleName} />
                    <Input.Password iconRender={()=>false} style={{marginTop:20}}  placeholder="password" onChange={handlePassword} />
                    <Button  style={{marginTop:20}}  type="primary" onClick={createAccount}>Create Account</Button>
                </Col>
                </Layout>
            </Layout>
            <Datatable deleteUser={deleteUser} data={users} />
        </>

    )
}

export default Signup