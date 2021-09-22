import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome',

  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  appName = '';
  name = '';

  @Input() header = '';
  @Input() message = '';

  constructor(private route: ActivatedRoute) {
  }


  /* https://www.guru99.com/angularjs-controller.html */
  tutorialName() {
 
    return "Angular JS";
  }

  ngOnInit(): void {
    this.appName = this.tutorialName();
  }

}
