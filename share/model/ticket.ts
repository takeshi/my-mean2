"use strict";
import {User} from './user';
import {Tracker} from './tracker'

export class Ticket {

    private author: User;

    setAuthor(author: User) {
        this.author = author;
    }

    getAuthor() {
        return this.author;
    }

    desc: string

    private tracker: Tracker

    setTracker(tracker: Tracker) {
        this.tracker = tracker;
    }

    getTracker() {
        return this.tracker;
    }
}