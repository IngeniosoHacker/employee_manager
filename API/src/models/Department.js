const db = require('../database/db');

class Department {
  constructor(data) {
    this.id = data.id;
    this.codigo = data.codigo;
    this.nombre = data.nombre;
    this.descripcion = data.descripcion;
  }

  static async getAll() {
    const query = 'SELECT * FROM Departments';
    return new Promise((resolve, reject) => {
      db.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          const departments = results.map((result) => new Department(result));
          resolve(departments);
        }
      });
    });
  }

  static async create(department) {
    const query = 'INSERT INTO Departments SET ?';
    return new Promise((resolve, reject) => {
      db.query(query, department, (err, result) => {
        if (err) {
          reject(err);
        } else {
          department.id = result.insertId;
          resolve(new Department(department));
        }
      });
    });
  }

  static async update(id, data) {
    const query = 'UPDATE Departments SET ? WHERE id = ?';
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
    const query = 'DELETE FROM Departments WHERE id = ?';
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

module.exports = Department;
