import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = { name, email, age };
            await axios.post('http://localhost:5000/api/users', user);
            alert('User created!');
            setName('');
            setEmail('');
            setAge('');
        } catch (error) {
            console.error('Error creating user', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
            <button type="submit">Create User</button>
        </form>
    );
};

export default CreateUser;
