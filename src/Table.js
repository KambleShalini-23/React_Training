import { Table } from "antd";

function UserTable(){

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name'
        },
        {
          title: 'Employee_Id',
          dataIndex: 'Employee_Id'
        },
        {
          title: 'Address',
          dataIndex: 'address'
        },
      ];
    var users = [
        {name: "Shalini",Employee_Id:"4143"},
        {name: "Kamble",Employee_Id: "7986",address:"Hyderabad"}
    ]
    var totalkeys = []
    users.forEach((each) => {
      var keys = Object.keys(each)
      totalkeys.push(...keys)
      console.log(totalkeys)
    })
    var uniqueKeys = new Set(totalkeys)
    var cols = []
    uniqueKeys.forEach((each)=> {
          cols.push({
            title:each.toUpperCase(),
            dataIndex:each})
    })
    return(
    <Table columns={cols} dataSource={users} />
    )
}

export default UserTable