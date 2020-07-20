import { Schema, model, Document, PaginateModel } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

export interface IUser extends Document {
  login: string,
  password: string,
  avatar: string
};

const userSchema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  }
});

userSchema.plugin(mongoosePaginate)

interface UserModel<T extends Document> extends PaginateModel<T> {}

// export const User: UserModel<IUser> = model<IUser>('user', userSchema);
export const User = model<IUser>('user', userSchema);
