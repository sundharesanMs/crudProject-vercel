import React from 'react';
import CreateUser from './CreateUser'; 
import Users from './Users';
// import UserList from './components/UserList';

function App() {
    return (
        <div className="App">
            <h1>Simple CRUD App</h1>
            <CreateUser />
            <Users />
      
        </div>
    );
}

export default App;
