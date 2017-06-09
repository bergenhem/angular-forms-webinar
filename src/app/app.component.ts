import { Component } from '@angular/core';
import { User } from './shared/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public formModel: User;

  constructor() {
    this.formModel = new User(
      0, //id
      "", //name
      new Date(), //DoB
      "", //street address
      "", //zipcode
      true, //newsletter,
      "" //gender
    );
  };
  onSubmit() {
    console.log("Submitting!", this.formModel);
  }
}
