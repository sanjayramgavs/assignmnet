import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ userid: '', password: '', email: '' });
  const [isCreateMode, setCreateMode] = useState(true);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    // Fetch the list of users from the server
    // You can use the fetch API or a library like Axios for making HTTP requests
    // Update the 'users' state with the fetched data
    // Example:
    // fetch('http://localhost:9900/getAll')
    //   .then((response) => response.json())
    //   .then((data) => setUsers(data))
    //   .catch((error) => console.error(error));
  }, []);

  const handleSearch = () => {
    // Implement search functionality
    // Send a GET request to the server to retrieve users by user ID
    // Example:
    // fetch(`http://localhost:9900/getById?uid=${selectedUserId}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.length > 0) {
    //       setFormData(data[0]);
    //       setCreateMode(false);
    //     } else {
    //       // Handle not found case
    //     }
    //   })
    //   .catch((error) => console.error(error));
  };

  const handleInsert = () => {
    // Implement insert functionality
    // Send a POST request to the server to insert a user
    // Example:
    // fetch('http://localhost:9900/insert', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Handle the response (e.g., display a success message)
    //   })
    //   .catch((error) => console.error(error));
  };

  const handleUpdate = () => {
    // Implement update functionality
    // Send a PUT request to the server to update the user
    // Example:
    // fetch('http://localhost:9900/update', {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Handle the response (e.g., display a success message)
    //   })
    //   .catch((error) => console.error(error));
  };

  const handleDelete = () => {
    // Implement delete functionality
    // Send a DELETE request to the server to delete the user
    // Example:
    // fetch(`http://localhost:9900/delete?uid=${selectedUserId}`, {
    //   method: 'DELETE',
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Handle the response (e.g., display a success message)
    //   })
    //   .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <h2>User Form</h2>
      <input
        type="text"
        name="userid"
        placeholder="User ID"
        value={formData.userid}
        onChange={(e) => setFormData({ ...formData, userid: e.target.value })}
        readOnly={!isCreateMode}
      />
      <input
        type="text"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <button onClick={isCreateMode ? handleInsert : handleUpdate}>
        {isCreateMode ? 'Create User' : 'Update User'}
      </button>

      <h2>User Search</h2>
      <input
        type="text"
        placeholder="Search by User ID"
        value={selectedUserId}
        onChange={(e) => setSelectedUserId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Password</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userid}>
              <td>{user.userid}</td>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => setSelectedUserId(user.userid)}>Read</button>
                <button onClick={() => setSelectedUserId(user.userid)}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;