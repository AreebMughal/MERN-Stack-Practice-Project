const PORT = 9000;
const express = require('express');
const app = express();
// const mongoose = require('mongoose');

const userRouter = require('./routers/user.routes');
// mongoose.connect('mongodb+srv://Areeb:areeb@cluster0.t79l8nf.mongodb.net/?retryWrites=true&w=majority')

app.use(express.json());

app.use('/user', userRouter);

app.listen(PORT, () => {
    console.log(`Listening to ${PORT} PORT...`);
});