const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Get all employees
router.get('/listemp', employeeController.getAllEmployees);

// Create a new employee
router.post('/saveemp', employeeController.createEmployee);

// Update an existing employee
router.put('/updateemp:id', employeeController.updateEmployee);

// Delete an employee
router.delete('/deleteemp:id', employeeController.deleteEmployee);

module.exports = router;
