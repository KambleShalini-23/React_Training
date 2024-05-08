import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Space, Table } from "antd";

function Cart() {
    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image) => <img src={image} alt="Cake" style={{ height: 100, width: 'auto' }} />,
        },
        {
            title: 'Id',
            dataIndex: 'cakeid',
            key: 'cakeid',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Button type="primary" onClick={() => removeItemFromCart(record.cakeid)}>Remove</Button>
            ),
        },
    ];

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios({
            url: "http://apibyauw.eu-4.evennode.com/api" + "/cakecart",
            method: "get",
            headers: {
                Authorization: localStorage.token
            }
        }).then((response) => {
            console.log("Cart items response:", response.data);
            setCartItems(response.data.data);
        });
    }, []);

    function removeItemFromCart(cakeid) {
        setCartItems(prevCartItems => prevCartItems.filter(item => item.cakeid !== cakeid));
    }
    
    return (
        <>
            <h1>Your added items :</h1>
            <Table
                dataSource={cartItems}
                columns={columns}
                rowKey="_id"
                pagination={false} // Disable pagination if not needed
            />
        </>
    );
}

export default Cart;
