const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const employeeRoutes = require('./routes/employees');
const departmentRoutes = require('./routes/departments');


const corsOptions = {
    origin: ['http://10.100.11.78:5173', 'http://localhost:5173'],
    optionsSuccessStatus: 200,
    credentials: true
}

// Middlewares
app.use(bodyParser.json())
app.use(cors(corsOptions));

// Routes
app.use('/api/employees', employeeRoutes);
app.use('/api/departments', departmentRoutes);

// Start server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
