const express = require('express');
const connectDB = require('./config/db');
const contactRoute = require('./routes/routes')
const cors = require('cors');
const app = express();
connectDB();
const corsOptions = {
    origin: 'http://localhost:5173',  // Allow only the frontend URL
    methods: 'GET,POST,PUT,DELETE',  // Allowed HTTP methods
    allowedHeaders: 'Content-Type,Authorization',  // Allowed headers 
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', contactRoute);
app.listen(7003, () => {
  console.log('Server is running on http://localhost:7003');
});
