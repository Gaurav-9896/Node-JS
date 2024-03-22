import express from 'express';
import {getUsers, addUser }from '../controllers/userControllers';

const Router = express.Router();

Router.post('/users', addUser );
Router.get('/user' , getUsers);

export default Router;