import { slideMenu } from './../animations';
import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

declare var jquery:any;
declare var $ :any;


@Component({
    selector: 'menu-bar',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    animations: [
        slideMenu
    ]
})

export class MenuComponent implements OnInit{
    navState:string = 'close';

    ngOnInit(){
        let menubar = $('#navwrap');
        //let anchorsList = $('#navwrap ul')

        Observable.fromEvent(menubar, 'mouseleave')
            .debounceTime(300)
            .subscribe((evt) => {
                this.navState = 'close';
                $('.page-container').css('padding-left', '45px')
            });

        Observable.fromEvent(menubar, 'mouseenter')
            .debounceTime(100)
            .subscribe((evt) => {
                this.navState = 'open';
        		$('.page-container').css('padding-left', '145px')
            });

        /*
        Observable.fromEvent(anchorsList, 'click')
            .debounceTime(100)
            .subscribe((evt) => {
                //this.navState = 'close';
                //$('.page-container').css('padding-left', '45px');
            })
        */
    }
    
    openMenu(){
        //this.navState = 'open';
		//$('.page-container').css('padding-left', '145px')
    }

    closeMenu(){
        //this.navState = 'close';
        //$('.page-container').css('padding-left', '45px')
    }
}