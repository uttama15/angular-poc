import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TabChangeUsingSubjectService } from '../services/tab-change-using-subject.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //@Output decorator is used to pass data from Child to Parent using an event property to emit the data
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor(private tabChangeUsingSubjectsService: TabChangeUsingSubjectService) { }

  ngOnInit(): void {
  }

  login() {
    this.tabChangeUsingSubjectsService.alreadySignedUp(true);
  }

  //method to emit data to Paarent
  notifyParent() {
    this.notify.emit('Message from Child to Parent!');
  }
}
