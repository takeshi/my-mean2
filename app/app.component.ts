import {Component} from 'angular2/core';
import {User} from '../share/model';

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
        <h1>My First Angular 2 App</h1>
    </div>
    `
})
export class AppComponent { 
    
    user = new User();
    
}