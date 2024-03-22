import { Request, Response } from 'express';
import User from '../models/user';
import { IUser } from '../models/user';
import { json } from 'body-parser';

const getUsers = async (req: Request, res: Response) => {
  try {
   
    const findUser: IUser[] = await User.find()
    res.json( {name :"abc"})
  } catch (error) {
    throw error
  }
}

const addUser = async (req: Request, res: Response) => {
  try {
    const body = req.body as Pick<IUser, "name" | "Age" | "email" | "gender">

    const Users: IUser = new User({
      name: body.name,
      Age:body.Age,
      email:body.email,
      gender:body.gender,
    })

    const newUser: IUser = await User.create(Users)
    const allUser: IUser[] = await User.find()

    res
      .status(201)
      .json({ message: "UserAdded", User: newUser, Users: allUser })
  } catch (error) {
    throw error
  }
}

export {getUsers,addUser};