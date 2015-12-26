import {Component} from 'angular2/core';
import {User} from '../share/model';

@Component({
    selector: 'my-app',
    templateUrl:'app/app.html'
})
export class AppComponent { 
    
    user = new User();
    
}

