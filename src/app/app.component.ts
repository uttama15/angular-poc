import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { TabChangeUsingSubjectService } from '../app/services/tab-change-using-subject.service'
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'angular-poc';
  signedUp: boolean = true;

  //data to be sent to child component(Login Component) using property binding and @Input
  message = 'Message from Parent!'

  //ViewChild makes it possible to access a child component and call methods or access instance variables that are available to the child
  @ViewChild(LoginComponent) child: LoginComponent;

  constructor(private tabChangeUsingSubjectsService: TabChangeUsingSubjectService) {}

  ngOnInit() {
    this.tabChangeUsingSubjectsService.getSignedUpValue().subscribe(
      value => this.signedUp = value
    );
  }

  //accessing method of child component(Login Component) using ViewChild
  ngAfterViewInit() {
    console.log(this.child.viewChildForChildComponent());
  }

  //method to receive notification from child component(Register Component) using @Output
  onNotified(event: Event) {
    console.log(event);
  }
}
