import { Request, Response, NextFunction } from 'express';
import User from '../models/user';

export default class UserRoutes {
  constructor() {} 

    async getAllUsers(req: Request, res: Response, next: NextFunction) {
          try {
            const users = await User.find();
              res.send(users)
          } catch (error) {
            console.log(error);
            res.send(false)
          }
    }

          createUser(req: Request, res: Response) {
            const user = {
              login: req.body.login,
              password: req.body.password,
              avatar: req.file.filename
            };
            const use = new User(user);
            use.save();
            res.send(user);
          }
}