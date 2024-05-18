const Department = require('../models/Department');

exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.getAll();
    res.json(departments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.createDepartment = async (req, res) => {
  try {
    const { codigo, nombre, descripcion } = req.body;
    const department = await Department.create({ codigo, nombre, descripcion });
    res.status(201).json(department);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const { codigo, nombre, descripcion } = req.body;
    const updated = await Department.update(id, { codigo, nombre, descripcion });
    if (updated) {
      res.json({ message: 'Department updated successfully' });
    } else {
      res.status(404).json({ message: 'Department not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message:'Internal server error' });
  }
};
