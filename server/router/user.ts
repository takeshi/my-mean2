"use strict";
import * as express from 'express';
import {UserRepository} from '../model/user';
import {User} from '../../share/model/user';
import * as validator from 'validator';
import {Validator, ValidationResult} from '../../share/util/validator';
import * as crud from '../util/crud';

export var app = express();

crud.createCrud(app, UserRepository, User);
