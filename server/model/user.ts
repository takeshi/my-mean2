import * as mongoose from 'mongoose';
import {User} from '../../share/model';
export {User} from '../../share/model';

export interface UserDocument extends User, mongoose.Document {

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

interface _UserModel extends mongoose.Model<UserDocument> {

}

export var UserModel = <_UserModel>mongoose.model('User', userSchema);