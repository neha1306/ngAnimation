import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition ,keyframes} from '@angular/animations';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-animationdemo',
  templateUrl: './animationdemo.component.html',
  styleUrls: ['./animationdemo.component.css'],
  animations: [

    trigger('changeDivSize', [
      state('initial', style({
        backgroundColor: 'green',
        width: '150px',
        height: '150px'
      })),
      state('final', style({
        backgroundColor: 'red',
        width: '200px',
        height: '200px'
      })),
      // transition('initial=>final', animate('1500ms')),
      // transition('final=>initial', animate('1000ms')),

      transition('* => *', [
        animate('1s', keyframes ( [
          style({ opacity: 0.1, offset: 0.1 , transform: 'translateX(20%)'}),
          style({ opacity: 0.6, offset: 0.2 , transform: 'translateX(50%)'}),
          style({ opacity: 1,   offset: 1, transform: 'translateX(100%)' }),
        ]))
      ])

    ]),

    trigger('balloonEffect', [
      state('initial', style({
        backgroundColor: 'green',
        transform: 'scale(1)',
      })),
      state('final', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)',
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms')),
    ]),

    trigger('fadeInOut', [
      state('void', style({
        opacity: '0',
        backgroundColor: 'red',
      })),
      transition('void <=> *', animate(1000)),
    ]),

    trigger('EnterLeave', [
      state('flyIn', style({
        transform: 'translateY(0)',
        backgroundColor: 'green'
      })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
         style({ transform: 'translateX(-100%)' }),
         animate('0.3s ease-out')
      ])
    ])

  ]
})
export class AnimationdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentState = 'initial';

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  listItem = [];
  list_order: number = 1;

  addItem() {
    var listitem = "ListItem" + this.list_order;
    this.list_order++;
    this.listItem.push(listitem);
  }
  removeItem() {
    this.listItem.length -= 1;
     if(this.listItem.length==0){
       this.list_order=1;
     }
  }
  
}
