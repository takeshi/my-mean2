"use strict";

import * as sequelize from 'sequelize';
import {db, toDefineAttribute, createRepository} from '../db';

import * as share from '../share';

import {UserEntity, UserRepository} from './user';
import {TrackerEntity, TrackerRepository} from './tracker';

export interface TicketEntity extends share.Ticket, sequelize.Instance<share.Ticket, share.Ticket> {

    setAuthor(author: UserEntity, option?: sequelize.InstanceUpdateOptions);
    getAuthor(): Promise<UserEntity>;
    setTracker(tracker: UserEntity, option?: sequelize.InstanceUpdateOptions);
    getTracker(): Promise<TrackerEntity>;

}

export var TicketRepository = createRepository<TicketEntity, share.Ticket>(share.Ticket);

// TicketRepository.belongsTo(UserRepository, { as: 'author' });
// TicketRepository.belongsTo(TrackerRepository);