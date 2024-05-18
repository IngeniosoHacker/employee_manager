const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');

// Get all departments
router.get('/listdeps', departmentController.getAllDepartments);

// Create a new department
router.post('/newdep', departmentController.createDepartment);

// Update an existing department
router.put('/updatedep:id', departmentController.updateDepartment);

// Delete a department
//router.delete('/deletedep:id', departmentController.deleteDepartment);

module.exports = router;
