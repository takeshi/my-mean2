"use strict";
import * as express from 'express';
import {TrackerRepository} from '../model/tracker';
import {Tracker} from '../../share/model/tracker';
import * as validator from 'validator';
import {Validator, ValidationResult} from '../../share/util/validator';
import * as crud from '../util/crud';

export var app = express();

crud.createCrud(app, TrackerRepository, Tracker);
