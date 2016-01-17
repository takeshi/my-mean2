'use strict';

import * as sequelize from 'sequelize';
import {db, toDefineAttribute, createRepository} from '../db';

import * as share from '../share';

import {UserEntity, UserRepository} from './user';
import {TrackerEntity, TrackerRepository} from './tracker';
import {TicketHistoryEntity} from './ticket_history';

export interface TicketEntity extends share.Ticket, sequelize.Instance<share.Ticket, share.Ticket> {

    setAuthor(author: UserEntity, option?: sequelize.InstanceUpdateOptions);
    getAuthor(option?: sequelize.FindOptions): Promise<UserEntity>;
    setTracker(tracker: UserEntity, option?: sequelize.InstanceUpdateOptions);
    getTracker(option?: sequelize.FindOptions): Promise<TrackerEntity>;

    getHistories(option?: sequelize.FindOptions): Promise<TicketHistoryEntity[]>;

}

export var TicketRepository = createRepository<TicketEntity, share.Ticket>(share.Ticket);
export var AUTHOR = { model: UserRepository, as: 'author' };
export var CREATOR = { model: UserRepository, as: 'creator' };

