const express = require('express');
const app =  express();
const PORT = process.env.PORT || 3000;
const {products} = require('./data.js')
console.log(products)
const cors = require('cors');
app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Full Stack Application!');
});

//
app.get('/api', (req, res) => {
    res.json({ message: 'API is working!' });
})

app.get(['/api/users', '/api/user'], (req, res) => {
    // Sample data for demonstration
    
    res.json(products);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});