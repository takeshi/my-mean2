import {db} from '../db';
import {UserRepository} from './user';
import {TicketRepository} from './ticket';

export async function init() {

    await db.sync({ force: true });

    await UserRepository.create({
        email: 'test@gmail.com',
        password: 'test'
    })

}
