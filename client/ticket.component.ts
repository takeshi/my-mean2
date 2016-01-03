import {Component, OnInit} from 'angular2/core';
import {User, Ticket, Validator, ValidationResult} from '../share/model';
import {HttpManager} from './util/http';
import {materialize,MaterializedTextarea} from './util/materialize';
import * as _ from 'lodash';
import {markdown} from './util/markdown';

@Component({
    selector: 'my-user',
    templateUrl: 'client/ticket.html',
    directives:[MaterializedTextarea]
})
export class TicketComponent implements OnInit {

    ticket = new Ticket();

    ngOnInit() {
        this.ticket.desc = `#sample

- list
- list
- list

### imput

    sample
    sample
    sample


1. test
1. test
1. test
1. test
        
        `;
    }

    markdown() {

        if (!this.ticket || !this.ticket.desc) {
            return "";
        }
        var html = markdown.toHTML(this.ticket.desc);
        console.log(JSON.stringify(this.ticket.desc),html);
        return html;
    }

}