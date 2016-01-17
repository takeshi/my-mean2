import {Component, OnInit } from 'angular2/core';
import {User, Ticket, Tracker, Validator, ValidationResult} from '../share/share';
import {HttpManager} from './util/http';
import {materialize, MaterializedTextarea, MaterializedSelect} from './util/materialize';
import * as _ from 'lodash';
import {markdown} from './util/markdown';

@Component({
    selector: 'my-user',
    templateUrl: 'client/ticket.html',
    directives: [MaterializedTextarea, MaterializedSelect],
    pipes: []
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
        this.ticket.desc = `#sample`;

    }

    markdown() {

        if (!this.ticket || !this.ticket.desc) {
            return '';
        }
        let html = markdown.toHTML(this.ticket.desc);
        return html;
    }


    submit() {
        this.httpManager.post('/app/ticket', this.ticket)
            .subscribe((res) => {
                this.ticket = res.json();
                this.preview = true;
                materialize.toast('upsert success', 1000);
            });
    }

}