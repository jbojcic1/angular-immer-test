import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {User} from './user';
import {Address} from './address';

const address1 = new Address();
address1.street = 'Licka 5';
address1.city = 'Split';
address1.zipCode = '21000';
address1.country = 'Croatia';

const address2 = new Address();
address1.street = 'Fifth Avenue 9';
address1.city = 'New York';
address1.zipCode = '11111';
address1.country = 'USA';

const address3 = new Address();
address1.street = 'Kungsangsgatan 8';
address1.city = 'Vasteras';
address1.zipCode = '3243232';
address1.country = 'Sweden';

const mate = new User();
mate.firstName = 'Mate';
mate.lastName = 'Matic';
mate.email = 'mate@matic.com';
mate.age = 20;
mate.address = address1;

const john = new User();
john.firstName = 'John';
john.lastName = 'Doe';
john.email = 'john@doe.com';
john.age = 50;
john.address = address2;

const bob = new User();
mate.firstName = 'Bob';
mate.lastName = 'Bobovski';
mate.email = 'bob@bobovski.com';
mate.age = 30;
mate.address = address3;

const users: User[] = [john, mate, bob];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  title = 'app';
  users: User[] = users;

  ngOnInit() {
  }

}
