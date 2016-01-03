/// <reference path="../../typings/jquery/jquery" />

interface _Materialize {

    toast(message: string,
        displayLength?: number,
        className?: string,
        completeCallback?: () => void);

}

declare var Materialize: _Materialize;
export var materialize = Materialize;

import {Directive, ElementRef, Renderer, Input, OnInit,OnChanges } from 'angular2/core';

@Directive({
    selector: '[materializedTextarea]',
})
export class MaterializedTextarea implements OnInit {

    constructor(private el: ElementRef, renderer: Renderer) {
    }

    ngOnInit() {
        var $target = jQuery(this.el.nativeElement);
        $target.val(this.desc);
        $target.trigger('autoresize');
    }

    @Input('ngModel')
    desc: string;

}

@Directive({
    selector: '[materializedSelect]',
})
export class MaterializedSelect implements OnInit {

    constructor(private el: ElementRef, renderer: Renderer) {
    }

    ngOnInit() {
        var $target: any = jQuery(this.el.nativeElement);
        setTimeout(()=>{
            $target.material_select();        
        },100);
    }

    @Input('ngModel')
    desc: string;

}

