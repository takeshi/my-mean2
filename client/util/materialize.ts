/// <reference path="../../typings/jquery/jquery" />


declare var Materialize: {
    toast(message: string,
        displayLength?: number,
        className?: string,
        completeCallback?: () => void);
};

export var materialize = Materialize;

import {Directive, ElementRef, Renderer, Input, OnInit, OnChanges, AfterViewInit } from 'angular2/core';

@Directive({
    selector: '[materializedTextarea]',
})
export class MaterializedTextarea implements OnInit {

    constructor(private el: ElementRef, renderer: Renderer) {
    }

    ngOnInit() {
        let $target = jQuery(this.el.nativeElement);
        $target.val(this.desc);
        $target.trigger('autoresize');
    }

    @Input('ngModel')
    desc: string;

}

@Directive({
    selector: '[materializedSelect]',
})
export class MaterializedSelect implements OnInit, AfterViewInit {

    $target: any;

    constructor(private el: ElementRef, renderer: Renderer) {
        this.$target = jQuery(this.el.nativeElement);
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.$target.material_select();
        }, 0);
    }

    ngOnInit() {
        // var $target: any = jQuery(this.el.nativeElement);
        // setTimeout(() => {
        //     $target.material_select();
        // }, 100);
    }

    @Input('ngModel')
    desc: string;

}

