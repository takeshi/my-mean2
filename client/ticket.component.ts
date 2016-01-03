import {Component, OnInit} from 'angular2/core';
import {User, Ticket, Tracker, Validator, ValidationResult} from '../share/model';
import {HttpManager} from './util/http';
import {materialize, MaterializedTextarea,MaterializedSelect} from './util/materialize';
import * as _ from 'lodash';
import {markdown} from './util/markdown';

@Component({
    selector: 'my-user',
    templateUrl: 'client/ticket.html',
    directives: [MaterializedTextarea,MaterializedSelect]
})
export class TicketComponent implements OnInit {

    constructor(private httpManager: HttpManager) {
    }

    ticket = new Ticket();

    trackers: Tracker[];

    preview: boolean = false;

    ngOnInit() {

        this.httpManager.get('/app/tracker')
            .subscribe((response) => {
                this.trackers = response.json();
            });


        this.ticket.desc = `#sample

- list
- list
- list
`;

    }

    markdown() {

        if (!this.ticket || !this.ticket.desc) {
            return "";
        }
        var html = markdown.toHTML(this.ticket.desc);
        return html;
    }

}