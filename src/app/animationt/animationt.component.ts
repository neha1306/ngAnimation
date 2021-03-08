import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
@Component({
  selector: 'app-animationt',
  templateUrl: './animationt.component.html',
  styleUrls: ['./animationt.component.css'],
  animations: [
    // trigger('openClose', [
    //   state('open', style({
    //     height: '200px',
    //     opacity: 1,
    //     backgroundColor: 'yellow'
    //   })),
    //   state('closed', style({
    //     height: '100px',
    //     opacity: 0.5,
    //     backgroundColor: 'green'
    //   })),
    //   transition('open => closed', [
    //     animate('1s')
    //   ]),
    //   transition('closed => open', [
    //     animate('0.5s')
    //   ]),
    //   transition('* => closed', [
    //     animate('1s')
    //   ]),

    //   transition('* => open', [
    //     animate('1s')
    //   ]),
    // ]),

     trigger('flyInOut',[
       transition('void=>*',[
         style({transform: 'translateX(-100%)'}),
         animate(1000,keyframes([
           style({opacity:0, transform: 'translateX(-100%)', offset:0}),
           style({opacity:1, transform: 'translateX(15px)', offset:0.3}),
           style({opacity:1, transform: 'translateX(0)', offset:1.0, backgroundColor:'red'})
         ]))
       ]),
       transition('*=>void',[
       
        animate(1000,keyframes([
          style({opacity:1, transform: 'translateX(0)', offset:0}),
          style({opacity:1, transform: 'translateX(-15px)', offset:0.7}),
          style({opacity:0, transform: 'translateX(100%)', offset:1.0})
        ]))
      ]),
     ])
    
  ],
})
export class AnimationtComponent implements OnInit {
  showDiv:boolean=true;

  isOpen = true;
  constructor() { }
  ngOnInit(): void { }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  toggleDiv(){
    this.showDiv=this.showDiv? false:true;
  }
}
