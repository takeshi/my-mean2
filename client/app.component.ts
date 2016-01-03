import {Component} from 'angular2/core';
import * as Router from 'angular2/router';
import {UserComponent} from './user.component';
import {TicketComponent} from './ticket.component';

@Router.RouteConfig([
    { useAsDefault: false, path: '/user', name: 'User', component: UserComponent },
    { useAsDefault: true, path: '/ticket', name: 'Ticket', component: TicketComponent }
])
@Component({
    selector: 'my-app',
    templateUrl: 'client/app.html',
    directives: [Router.ROUTER_DIRECTIVES]
})
export class AppComponent {

}

