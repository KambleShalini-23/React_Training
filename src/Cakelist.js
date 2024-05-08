import { Button, Row } from "antd";
import Cake from "./Cake";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Cakelist({ searchQuery }) {
    const [cakes, setCakes] = useState([]);

    useEffect(() => {
        getCakeList();
    }, []);

    function getCakeList() {
        axios({
            url: "http://apibyauw.eu-4.evennode.com/api" + "/allCakes",
            method: "get",
        }).then((response) => {
            console.log("Response", response.data.data);
            if (searchQuery && searchQuery !== "undefined") {
                setCakes(response.data.data.filter(cake => cake.name && cake.name.includes(searchQuery)));
            } else {
                setCakes(response.data.data);
            }
        }, (error) => {
            console.log("Error", error);
        });
    }

    return (
        <Row justify={"space-evenly"}>
            {cakes.map((each, index) => {
                return <Cake data={each} key={index} />;
            })}
        </Row>
    );
}
