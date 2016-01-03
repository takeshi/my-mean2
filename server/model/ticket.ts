export {Ticket} from '../../share/model/ticket';
import {Ticket} from '../../share/model/ticket';
import {UserRepository} from './user';
import * as sequelize from 'sequelize';
import {db} from '../db';

export var TicketRepository = db.define<Ticket, {}>('ticket', {
    desc: {
        type: sequelize.STRING
    }
});

TicketRepository.belongsTo(UserRepository, { as: 'author',foreignKey : 'authorId' });