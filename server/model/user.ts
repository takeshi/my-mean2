"use strict";

import * as sequelize from 'sequelize';
import {db, toDefineAttribute, createRepository} from '../db';

import {User} from '../share';

export interface UserEntity extends User, sequelize.Instance<UserEntity, User> {
};

export var UserRepository = createRepository(User);
