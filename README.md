# AngularPoc

## ViewChild

@ViewChild decorator is used to access a directive/child component from a parent component, or to access a DOM element of the template in class.
### Access DOM Element
Refer to Login Component. @ViewChild is used to access the input fields of Email and Password using #email and #password respectively. On hitting `SignIn` button the values of the fields are logged in console.
### Access Child Component from Parent Component
Refer to app.component.ts and login.component.ts. The method in Login Component is accessed from App Component and the value returned from the Child Component method `viewChildForChildComponent()`is logged in console.

## @Input

@Input decorator is used for passing data from parent to child using property binding.
Refer to app.component.html and login.component.ts. The value sent by App Component to Login Component is logged in console.


## @Output

@Output decorator is used for passing data from child to parent using event emitter.
Refer to app.component.ts and register.component.ts. The value is sent from child to parent on hitting the button `Notify Parent using @Output` in Register Component and the emitted value is logged in console by App Component.

## Subject

An Observable allows you to subscribe only whereas a Subject allows you to both publish and subscribe. So a subject allows your services to be used as both a publisher and a subscriber.
Refer to app.component.ts, login.component.ts, register.component.ts and tab-change-using-subject.service.ts.
The service class contains the Subject.
The Login and Register Component publishes `signedUp` value to the Subject and App Component subcribes the Observable of the Subject to get notified of the changes.

## Promise vs Observable

Promise emits a single value while Observable emits multiple values. So, when handling an HTTP request, Promise can manage a single response for the same request, but what if there are multiple responses to the same request, then we have to use Observable.

Observables are lazy, they’re not executed until we subscribe to them using the subscribe() method.
Promises are not lazy, execute immediately after creation.

Observables have subscriptions that are cancellable using the unsubscribe() method, which stops the listener from receiving further values. On the other hand, Promises cannot be cancelled.

