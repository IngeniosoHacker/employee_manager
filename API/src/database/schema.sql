-- Create the database
CREATE DATABASE IF NOT EXISTS employee_management_db;

-- Use the database
USE employee_management_db;

-- Create the Departments table
CREATE TABLE IF NOT EXISTS Departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(10) UNIQUE NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT
);

-- Create the Employees table
CREATE TABLE IF NOT EXISTS Employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(10) UNIQUE NOT NULL,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    fechaNacimiento DATE NOT NULL,
    departamentoId INT NOT NULL,
    FOREIGN KEY (departamentoId) REFERENCES Departments(id) ON DELETE CASCADE
);
