import express   from "express";
import { getUsers, AddUser } from "../controller/user.controller.js";
 

const route = express.Router();

route.get('/', getUsers)
route.post('/add',AddUser)

export default route;