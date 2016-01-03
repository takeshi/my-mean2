"use strict";

import {db} from '../db';
import {UserRepository} from './user';
import {TicketRepository} from './ticket';
import {TrackerRepository} from './tracker';

export async function init() {

    await UserRepository.sync({ force: true });
    await TicketRepository.sync({ force: true });
    await TrackerRepository.sync({ force: true });

    await UserRepository.create({
        email: 'test@gmail.com',
        password: 'test'
    });

    await TrackerRepository.bulkCreate([
        { name: 'Bug' },
        { name: 'Q&A' },
        { name: 'Theme' },
        { name: 'Feature' },
        { name: 'Task' },
    ]);

    var user = await UserRepository.findOne();
    var tracker = await TrackerRepository.findOne();

    var ticket = TicketRepository.build({
        title: 'sample',
        desc: '#sample'
    });
    ticket.setAuthor(user);
    ticket.setTracker(tracker);
    await ticket.save();

}