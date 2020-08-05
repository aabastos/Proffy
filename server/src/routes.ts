import express, { response } from 'express';
import ClassesController from './controller/ClassesController';

const routes = express.Router();
const classesController = new ClassesController;

routes.get("/", (req, res) => {
    res.send("Hello World");
})

routes.post("/classes", classesController.create);

export default routes;