import * as express from 'express';
import {TicketRepository, AUTHOR}  from '../model/ticket';
import * as tryCatch from '../util/try_catch';

import * as tracker from '../model/tracker';
import * as user from '../model/user';
import * as history from '../model/ticket_history';

import * as crud from '../util/crud';
import {Ticket} from '../../share/model/ticket';

export var app = express();

app.get('/', (req, res) => {
    tryCatch.try_catch(req, res, async () => {
        var tickets = await TicketRepository.findAll({
            include: [
                tracker.TrackerRepository,
                AUTHOR,
                history.TICKET_HISTORY
            ]
        });
        res.json(tickets);
    });
});

crud.createCrud(app, TicketRepository, Ticket, {
    include: [
        tracker.TrackerRepository,
        AUTHOR,
        history.TICKET_HISTORY
    ]
});