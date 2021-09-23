import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',

  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  appName = '';
  name = '';

  element = {
    a: '',
    b: 0.0,
    obj: {
      definition: 0,
      err: ''
    }
  };

   public friends: Array<{name: string, age : number , gender : string}> = []; 
 
   public topicNames:  Array<{name: string}> = [
    { name: "What controller do from Angular's perspective" },
    { name: "Controller Methods" },
    { name: "Building a basic controller" }];
  

  myDate: string;

  constructor(private route: ActivatedRoute) {
    this.myDate = new Date().toISOString().slice(0, 10);
    this.friends = [
      {name:'John', age:25, gender:'boy'},
      {name:'Jessie', age:30, gender:'girl'},
      {name:'Johanna', age:28, gender:'girl'},
      {name:'Joy', age:15, gender:'girl'},
      {name:'Mary', age:28, gender:'girl'},
      {name:'Peter', age:95, gender:'boy'},
      {name:'Sebastian', age:50, gender:'boy'},
      {name:'Erika', age:27, gender:'girl'},
      {name:'Patrick', age:40, gender:'boy'},
      {name:'Samantha', age:60, gender:'girl'}
    ]; 
    console.log('Array loaded, position 1: ' + this.friends[0].name + ' ' + this.friends[0].age + ' ' + this.friends[0].gender); 
  }

  /* https://www.guru99.com/angularjs-controller.html */
  tutorialName() {

    return "Angular JS";
  }

  ngOnInit(): void {


    this.appName = this.tutorialName();
    this.element.a = "Inizializzato";
    this.element.b = 1;
    this.element.obj.definition = 999;
    this.element.obj.err = 'ERR_999';

  }
}
