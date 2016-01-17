'use strict';

import * as sequelize from 'sequelize';
import {db, toDefineAttribute, createRepository} from '../db';

import * as share from '../share';

import {UserEntity, UserRepository} from './user';
import {TrackerEntity, TrackerRepository} from './tracker';
import {TicketEntity, TicketRepository} from './ticket';

export interface TicketHistoryEntity extends share.TicketHistory,
    sequelize.Instance<TicketHistoryEntity, share.TicketHistory> {
}

export var TicketHistoryRepository =
    createRepository<TicketHistoryEntity, share.TicketHistory>(share.TicketHistory);
