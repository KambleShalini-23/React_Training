import { Divider } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function  Welcome() {
  return (
    <div>
        <Divider orientation='centre' style={{fontSize:"50px"}}>Hi Welcome to Cakes World</Divider>
        <Link to="/Profile" style={{fontSize:"30px"}}>Profile</Link>
        <hr></hr>
        <Link to="/" style={{fontSize:"30px"}}>Orders</Link>
        <hr></hr>
        <Link to="/Cakelist" style={{fontSize:"30px"}}>Cakelist</Link>
    </div>
  )
}

export default Welcome
