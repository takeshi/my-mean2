import * as mongoose from 'mongoose';
import {User} from '../../share/model';

export interface IUser extends User, mongoose.Document {

}

export interface IUserModel extends mongoose.Model<IUser> {
    findByName(name, cb);
}

var userSchema: mongoose.Schema = new mongoose.Schema(
    {
        password: String,
        email: String
    },
    {
        collection: 'User'
    }
);

export var UserModel = <IUserModel>mongoose.model('User', userSchema);
