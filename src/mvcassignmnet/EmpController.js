// EmployeeController.js
import Employee from './EmpModel';

const employeeController = {
  employees: [],

  addEmployee: (name, email, phoneNumber) => {
    const newEmployee = new Employee(name, email, phoneNumber);
    employeeController.employees.push(newEmployee);
    return newEmployee;
  },

  getAllEmployees: () => {
    return employees;
  },
};

export default employeeController;
