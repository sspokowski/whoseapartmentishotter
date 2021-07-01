import express from 'express';
import routes from './src/routes/apartmentRoutes.js';
import path from 'path';

//set up server
const app = express();
const port = process.env.PORT || 3000;

//set up request body parsing
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

//apply routes
app.use('/', routes);

//catch all other routes
app.use((request, response) => {
    response.status(404).json({message: '404 - Not Found', status: 404});
});

//handle errors
app.use((error, request, response, next) => {
    console.error(error);
    response.status(error.status || 500).json({error: error.message, status: 500});
});

app.listen(port, async () => {
    console.log(`server running on port: ${port}`);
});