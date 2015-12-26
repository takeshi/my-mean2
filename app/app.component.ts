import {Component} from 'angular2/core';
import {User} from '../share/model';
import * as Router from 'angular2/router';
import {UserComponent} from './user.component';

@Router.RouteConfig([
    { useAsDefault: true, path: '/user', name: 'UserComponent', component: UserComponent },

])
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives:[Router.ROUTER_DIRECTIVES]
})
export class AppComponent {

    user = new User();

}

