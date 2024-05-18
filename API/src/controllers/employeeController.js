const Employee = require('../models/Employee');

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.getAll();
    res.json(employees);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.createEmployee = async (req, res) => {
  try {
    const { nombres, apellidos, fechaNacimiento, departamentoId } = req.body;
    const employee = await Employee.create({ nombres, apellidos, fechaNacimiento, departamentoId });
    res.status(201).json(employee);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombres, apellidos, fechaNacimiento, departamentoId } = req.body;
    const updated = await Employee.update(id, { nombres, apellidos, fechaNacimiento, departamentoId });
    if (updated) {
      res.json({ message: 'Employee updated successfully' });
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Employee.delete(id);
    if (deleted) {
      res.json({ message: 'Employee deleted successfully' });
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
