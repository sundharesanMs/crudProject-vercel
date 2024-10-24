import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateUser from './UpdateUser';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/users');
                setUsers(res.data);
            } catch (error) {
                console.error('Error fetching users', error);
            }
        };
        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/users/${id}`);
            setUsers(users.filter(user => user._id !== id));
        } catch (error) {
            console.error('Error deleting user', error);
        }
    };

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        {user.name} - {user.email} - {user.age}
                        <button onClick={() => setEditUser(user)}>Edit</button>
                        <button onClick={() => handleDelete(user._id)}>Delete</button>
                    </li>
                ))}
            </ul>

            {editUser && <UpdateUser user={editUser} setEditUser={setEditUser} />}
        </div>
    );
};

export default Users;
