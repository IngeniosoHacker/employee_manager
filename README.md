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

## API Usage
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

## Front-end

The front-end of the application is built using Svelte and Tailwind CSS. The structure of the components follows the Atomic Design methodology, comprising atoms, molecules, and organisms.

### Component Structure

- **Atoms**: The smallest building blocks of the UI.
  - `Button.svelte`: Represents a simple button.
  - `Input.svelte`: Represents a text input field.
  - `Label.svelte`: Represents a label for input fields.

- **Molecules**: Groups of atoms working together.
  - `EmployeeForm.svelte`: Contains input fields and labels for creating or updating an employee.
  - `DepartmentForm.svelte`: Contains input fields and labels for creating or updating a department.

- **Organisms**: Groups of molecules functioning together.
  - `EmployeeList.svelte`: Displays a list of employees and provides options to create, update, and delete employees.
  - `DepartmentList.svelte`: Displays a list of departments and provides options to create, update, and delete departments.

### Setting Up the Front-end

1. **Navigate to the front-end directory**

   ```
   cd webapp
   ```

2. **Install Dependencies**

   ```
   npm install
   ```

3. **Run the Development Server**

   ```
   npm run dev
   ```

   This will start the development server and open the application in your default browser.

### Default Page

By default, the application displays the Employee List component, which includes a table showing the name, ID, and department of each employee, as well as a form to create new employees. The navbar provides navigation options for switching between Employees and Departments.

### Navigation and Components

- **Navbar**: Includes links to the Employees and Departments sections.
  - **Employees**: Displays the `EmployeeList` component with the employee table and a form to create new employees.
  - **Departments**: Displays the `DepartmentList` component with the department table and a form to create new departments.

### Using the API with the Front-end

The front-end interacts with the back-end API to fetch, create, update, and delete employees and departments. Ensure the API server is running and accessible at `http://localhost:3000`.

- **Fetching Employees**: The `EmployeeList` component fetches the list of employees from `GET /api/employees/listemp`.
- **Creating a New Employee**: The `NewEmployeeForm` component sends a POST request to `POST /api/employees/saveemp` to create a new employee.
- **Updating an Employee**: Implemented in the `EmployeeList` component through the `PUT /api/employees/updateemp:id` endpoint.
- **Deleting an Employee**: Implemented in the `EmployeeList` component through the `DELETE /api/employees/deleteemp:id` endpoint.

- **Fetching Departments**: The `DepartmentList` component fetches the list of departments from `GET /api/departments/listdeps`.
- **Creating a New Department**: The `NewDepartmentForm` component sends a POST request to `POST /api/departments/newdep` to create a new department.
- **Updating a Department**: Implemented in the `DepartmentList` component through the `PUT /api/departments/updatedep:id` endpoint.
- **Deleting a Department**: Implemented in the `DepartmentList` component through the `DELETE /api/departments/deletedep:id` endpoint.

### Building for Production

To create a production build of the front-end, run:

```
npm run build
```

This will generate optimized, static files in the `build` directory.

### Deploying

Deploy the generated static files from the `build` directory to your preferred web server or hosting platform.

Now your front-end should be set up and ready to interact with the back-end API seamlessly! If you need further assistance, let me know!
