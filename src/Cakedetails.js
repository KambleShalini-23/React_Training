import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Space,Button, Card, Image } from "antd";

export default function Cakedetails(){
    var params = useParams()
    var cakeid = params.cakeid;
    var [cakedetails, setCakedetails] = useState({});

    useEffect(() => {
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/cake/"+cakeid,
            method: "get"
        }).then(
            (response) => {
                setCakedetails(response.data.data);
            }, (error) => {
                console.log("no cake data found", error)
            }
        )
    },[])

    function addToCart() {
        var requestJson = {
            name: cakedetails.name,
            cakeid: cakedetails.cakeid,
            price: cakedetails.price,
            image: cakedetails.image,
            weight: 4,
        };
    
        axios({
            url: "http://apibyauw.eu-4.evennode.com/api" + "/addcaketocart",
            method: "post",
            data: requestJson,
            headers: {
                Authorization: localStorage.token,
            },
        }).then(() => {
            console.log("added to Cart");
        });
    }
    return (
    <>
        <Space direction="horizontal" size={50} style={{ paddingLeft: 100, paddingTop: 50 }}>
            <Card style={{ width: 300 }}>
                <img src={cakedetails?.image} style={{ height: 250, width: '100%' }} />
            </Card>
            <Card style={{ width: 300 }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><strong>Id:</strong> {cakedetails?.cakeid}</li>
                    <li><strong>Name:</strong> {cakedetails?.name}</li>
                    <li><strong>Price:</strong> {cakedetails?.price}</li>
                    <li><Button type="primary" onClick={addToCart}>Add to Cart</Button></li>
                    {cakedetails.tag && <li><strong>{cakedetails.tag}</strong></li>}
                </ul>
            </Card>
        </Space>  
    </>
    );
}