// Importing necessary modules
const express=require('express');
const connectDB=require('./config/db');
const userRoutes=require('./routes/userRoutes')


// Initializing the Express app
const app=express();

//connect database
connectDB();

// Middleware to parse JSON
app.use(express.json());

//Routes middleware
app.use(userRoutes)


port=3400;


app.get('/nath', (req, res) => {
    res.send('welcome matthew');
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})