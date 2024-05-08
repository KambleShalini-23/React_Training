import { useState } from "react";
import { Button } from "antd"

export default function DeleteUser() {
    const [data, setData] = useState(['Eli','Smith', 'Jhon']);
    const handleDelete = (index,e) => {
        setData(data.filter((v, i) => i !== index));
    }
    const rows = data.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item}</td>
          <td><Button onClick={e => handleDelete(index,e)}>Delete</Button></td>
        </tr>
      )
    })
    return (
      <div className="App">
        <h1>Delete the users</h1>
        <table>
          {rows}
          </table>
      </div>
    );
  }