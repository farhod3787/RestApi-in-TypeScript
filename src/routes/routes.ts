import express, {Request, Response, NextFunction, Router, Application} from 'express';
import UserRoutes from '../controller/user';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => { 
      cb(null, "src/images");
  },
  filename: (req, file, cb) => {
      const name = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, Date.now() + name);
  }
});

const upload = multer({ storage: storage });

export default class Routes { 
    coursesCtrl = new UserRoutes();
    constructor(app: Application) {
      app.route('/get').get(this.coursesCtrl.getAllUsers);
      app.route('/post').post(upload.single('image'), this.coursesCtrl.createUser);
    }
}

