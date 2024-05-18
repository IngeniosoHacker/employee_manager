# Employee Management System

This is a web application for managing employees and departments built with Node.js, Express, and MySQL.

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or later)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Installation

1. **Clone the repository**

```
git clone https://github.com/IngeniosoHacker/employee_manager.git
cd employee_manager
```
2. **Create the `.env` file**

Create a new file called `.env` in the project root directory and add the following environment variables:

```
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=your_mysql_password
MYSQL_DATABASE=employee_management_db

```

Replace `your_mysql_password` with your desired MySQL password.

3. **Start the Docker container**

```
docker-compose up -d
```

This command will start the MySQL container in detached mode.

4. **Import the database schema**

```
docker exec -it employee_mysql mysql -u root -p
```

Enter the MySQL password you set in the `.env` file when prompted.

Once you're connected to the MySQL container, import the database schema by running:

```sql
SOURCE /path/to/schema.sql;
```
Replace /path/to/schema.sql with the actual path: `API/src/database/schema.sql`

4. **Install Dependencies**

```
npm install
```

5. **Start the application**

```
npm start
```

## Usage
The application provides the following endpoints:

`GET /api/employees/listemp`: Get all employees

`POST /api/employees/saveemp`: Create a new employee

`PUT /api/employees/updateemp:id`: Update an existing employee

`DELETE /api/employees/deleteemp:id`: Delete an employee

`GET /api/departments/listdeps`: Get all departments

`POST /api/departments/newdep`: Create a new department

`PUT /api/departments/updatedep:id`: Update an existing department

`DELETE /api/departments/deletedep:id`: Delete a department

use cURL or Postman to interact with this endpoints
