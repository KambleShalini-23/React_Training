import {Button, Flex, Input, Menu} from "antd"
import { Link, useNavigate } from "react-router-dom"
import { SearchOutlined } from "@ant-design/icons"


function Navbar(){
    var searchtext
    var navigate = useNavigate()
    function search(){
        var url = "/Cakelist/search?name="+searchtext
        navigate(url)
    }

    function handleSearchText(e){
            searchtext = e.target.value
    }
    
    const items = [
        {label:(<Link to="/Welcome">Home</Link>)},
        {label:(
            <Link to="/login"><Button  type="primary">Login</Button></Link>
        )},
        {label:(
            <Input placeholder="Search" onChange={handleSearchText}></Input> 
        )},
        {icon:( 
        <SearchOutlined  onClick={search} ></SearchOutlined>)
        },
        {label:(
            <Link to="/cart"><Button  type="primary">Cart</Button></Link>
        )}
    ]

    return (
        <>
        <div>
            <Menu theme="dark" mode="horizontal" items={items} />
        </div>
        </>
    )
}

export default Navbar


