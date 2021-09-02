import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabChangeUsingSubjectService {

  //An Observable allows you to subscribe only whereas a Subject allows you to both publish and subscribe
  //Thus, Subject is a special observable that act as both observer & observable. 
  //They allow us multicast values to many Observers.
  private signedUp = new Subject<boolean>();

  constructor() { }

  alreadySignedUp(signedUp : boolean) {
    this.signedUp.next(signedUp);
  }

  getSignedUpValue() {
    return this.signedUp.asObservable();
  }
}
