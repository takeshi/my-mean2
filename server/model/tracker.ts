"use strict";

import * as share from '../../share/model/tracker';
import * as sequelize from 'sequelize';
import {db} from '../db';

export interface Tracker extends share.Tracker, sequelize.Instance<share.Tracker, {}> {
}


export var TrackerRepository = db.define<Tracker, {}>('tracker', {
    name: {
        type: sequelize.STRING
    }
});