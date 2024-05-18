const db = require('../database/db');

class Employee {
  constructor(data) {
    this.id = data.id;
    this.codigo = data.codigo;
    this.nombres = data.nombres;
    this.apellidos = data.apellidos;
    this.fechaNacimiento = data.fechaNacimiento;
    this.departamentoId = data.departamentoId;
  }

  static async getAll() {
    const query = 'SELECT * FROM Employees';
    return new Promise((resolve, reject) => {
      db.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          const employees = results.map((result) => new Employee(result));
          resolve(employees);
        }
      });
    });
  }

  static async create(employee) {
    const query = 'INSERT INTO Employees SET ?';
    return new Promise((resolve, reject) => {
      db.query(query, employee, (err, result) => {
        if (err) {
          reject(err);
        } else {
          employee.id = result.insertId;
          resolve(new Employee(employee));
        }
      });
    });
  }

  static async update(id, data) {
    const query = 'UPDATE Employees SET ? WHERE id = ?';
    return new Promise((resolve, reject) => {
      db.query(query, [data, id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.affectedRows > 0);
        }
      });
    });
  }

  static async delete(id) {
    const query = 'DELETE FROM Employees WHERE id = ?';
    return new Promise((resolve, reject) => {
      db.query(query, [id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result.affectedRows > 0);
        }
      });
    });
  }
}

module.exports = Employee;
