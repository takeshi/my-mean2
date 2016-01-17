'use strict';

import * as sequelize from 'sequelize';
import {db, toDefineAttribute, createRepository} from '../db';

import * as share from '../share';

export interface TrackerEntity extends share.Tracker, sequelize.Instance<share.Tracker, share.Tracker> {
}

export var TrackerRepository = createRepository<TrackerEntity, share.Tracker>(share.Tracker);