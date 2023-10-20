import React, { useState } from "react";
import User from "./User.js";

function UserDetails() {
  const [userArray, setUserArray] = useState([]);
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    Address: "",
  });
  const [isFormValid, setIsFormValid] = useState(false); // Validation status

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });

    // Check validation condition (minimum 5 characters)
    const isFirstNameValid = userInput.firstName.length >= 5;
    const isLastNameValid = userInput.lastName.length >= 5;
    const isAddressValid = userInput.Address.length >= 5;

    // Update validation status
    setIsFormValid(isFirstNameValid && isLastNameValid && isAddressValid);
  };

  const handleReset = () => {
    setUserInput({
      firstName: "",
      lastName: "",
      Address: "",
    });
    setIsFormValid(false); // Reset validation status
  };

  const handleAddUser = (event) => {
    event.preventDefault();
    const newUser = new User(
      userInput.firstName,
      userInput.lastName,
      userInput.Address
    );
    setUserArray([...userArray, newUser]);
    handleReset();
  };

  const handleDeleteUser = (index) => {
    const updatedUserArray = userArray.filter((_, i) => i !== index);
    setUserArray(updatedUserArray);
  };

  return (
    <div>
      <form onReset={handleReset} onSubmit={handleAddUser}>
        <center>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={userInput.firstName}
            onChange={handleChange}
          />
          <br />
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={userInput.lastName}
            onChange={handleChange}
          />
          <br />
          <label>Address</label>
          <input
            type="text"
            name="Address"
            value={userInput.Address}
            onChange={handleChange}
          />
          <br />
          <input type="submit" value="Save" disabled={!isFormValid} />&nbsp;
          <input type="reset" value="Reset" />
        </center>
      </form>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userArray.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.Address}</td>
              <td>
                <button onClick={() => handleDeleteUser(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserDetails;
