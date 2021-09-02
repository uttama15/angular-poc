import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TabChangeUsingSubjectService } from '../services/tab-change-using-subject.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //@Input is used to capture data sent from Parent to Child
  @Input('message') messageFromParent : string;

  //accessing html elements that have a template reference variable(e.g #email, #password) using ViewChild
  //ElementRef is used to refer an Html Element & manipulate the DOM
  @ViewChild('email') email: ElementRef;
  @ViewChild('password') password: ElementRef;

  constructor(private tabChangeUsingSubjectsService: TabChangeUsingSubjectService) { }

  ngOnInit(): void {
    console.log(this.messageFromParent);
  }

  //publishing signedUp value as false in the service
  register() {
    this.tabChangeUsingSubjectsService.alreadySignedUp(false);
  }

  signIn() {
    console.log(this.email.nativeElement.value)
    console.log(this.password.nativeElement.value)
  }

  //method to be accessed by parent using ViewChild
  viewChildForChildComponent() : string {
    return 'This is an example where ViewChild is used to access Child Component method from Parent Component';
  }

}
