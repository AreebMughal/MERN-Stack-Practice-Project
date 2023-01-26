const PORT = 9000;
const express = require('express');
// const mongoose = require('mongoose');
const userRouter = require('./routers/user.route');
const candidateRouter = require('./routers/candidate.route');
const empolyerRouter = require('./routers/employer.route');

// mongoose.connect('mongodb+srv://Areeb:areeb@cluster0.t79l8nf.mongodb.net/?retryWrites=true&w=majority')
const app = express();
app.use(express.json());

app.use('/user', userRouter);
app.use('/user/candidate', candidateRouter);
app.use('/user/employer', empolyerRouter);

app.listen(PORT, () => {
    console.log(`Listening to ${PORT} PORT...`);
});