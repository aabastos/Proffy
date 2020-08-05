import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', () => {

})

app.listen(3333);