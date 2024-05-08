import React, { useState } from 'react';
import { Button, Table, Input } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'; // Importing the delete icon
import axios from 'axios';

function MarkAttendance() {
  const [students, setStudents] = useState([
    { name: "Shalini Kamble", email: "shalini@example.com" },
  ]);
  var [users,setUsers] = useState(0);

  const handleDelete = (index) => {
    setStudents(students.filter((_, i) => i !== index));
    setUsers(users-1)
  };

  const cols = [
    {
      dataIndex: 'name',
      title: 'Name',
      sorter: (a, b) => a.name.localeCompare(b.name), // Sort by name
      defaultSortOrder: 'ascend', // Default to ascending sort
    },
    { dataIndex: 'email', title: 'Email',
        sorter: (a, b) => a.email.localeCompare(b.email), // Sort by name
        defaultSortOrder: 'ascend', // Default to ascending sort
     },
    {
      title: 'Actions',
      render: (_, __, index) => (
        <Button
          type="link"
          icon={<DeleteOutlined />}
          onClick={() => handleDelete(index)}
        />
      ),
    },
  ];

  const [newStudent, setNewStudent] = useState({ name: '', email: '' });

  const handleAttendance = () => {
    if (newStudent.name && newStudent.email) {
      setStudents([...students, newStudent]);
      setNewStudent({ name: '', email: '' });
      setUsers(users+1)
    }
  };

  return (
    <>
      <Input
        style={{width:200}}
        placeholder="Name"
        value={newStudent.name}
        onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
      />
      <br />
      <Input
        style={{width:200}}
        placeholder="Email"
        value={newStudent.email}
        onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
      />
      <br />
      <Button onClick={handleAttendance}>Mark Attendance</Button>
      <br />
      <h5>The People Joined: {users}</h5>
      <Table dataSource={students} columns={cols} rowKey={(record, index) => index} />
    </>
  );
}

export default MarkAttendance;
