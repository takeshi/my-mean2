"use strict";

import {db, createRelation} from '../db';
import * as share from '../share';
import {UserRepository} from './user';
import {TicketRepository} from './ticket';
import {TrackerRepository} from './tracker';
import {TicketHistoryRepository} from './ticket_history';

export async function init() {
    try {
        createRelation(share.Ticket);
        createRelation(share.User);
        createRelation(share.Tracker);
        createRelation(share.TicketHistory);

        await UserRepository.sync({ force: true });
        await TrackerRepository.sync({ force: true });
        await TicketRepository.sync({ force: true });
        await TicketHistoryRepository.sync({ force: true });

        var user;
        await db.transaction(async (t) => {

            user = await UserRepository.create(<share.User>{
                email: 'test@gmail.com',
                password: 'test'
            }, { transaction: t });

            var trackers = await TrackerRepository.bulkCreate([
                { name: 'Bug' },
                { name: 'Q&A' },
                { name: 'Theme' },
                { name: 'Feature' },
                { name: 'Task' },
            ], { transaction: t });
        });

        await db.transaction(async (t) => {

            var ticket = await TicketRepository.create(
                <share.Ticket>{
                    title: 'sample',
                    desc: '#sample',
                    authorId: 1,
                    trackerId: 1,
                    histories: [
                        {
                            version: 0
                        },
                        {
                            version: 1
                        },
                    ]
                }, {
                    transaction: t
                });

        });

    } catch (e) {
        console.log(e,e.stack);
        throw e;
    }
}