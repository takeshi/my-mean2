import * as mongoose from 'mongoose';

export function init(fn?: () => void) {
    console.log('start mongoose');
    mongoose.connect('mongodb://localhost/mydb');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback() {
        console.log("Connected to 'mydb' database");
        if (fn) {
            fn();
        }
    });
}
