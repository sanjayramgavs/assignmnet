// EmployeeView.js
import React, { useState } from 'react';
import employeeController from './EmpController';

const EmployeeView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    employeeController.addEmployee(name, email, phoneNumber);
    setName('');
    setEmail('');
    setPhoneNumber('');
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Employee</button>
      </form>
      <h2>Employee List</h2>
      <ul>
        {employeeController.getAllEmployees().map((employee, index) => (
          <li key={index}>
            <strong>Name:</strong> {employee.name},{' '}
            <strong>Email:</strong> {employee.email},{' '}
            <strong>Phone Number:</strong> {employee.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeView;
