import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Address} from "../address";

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAddressComponent implements OnInit {

  @Input() address: Address;

  constructor() { }

  ngOnInit() {
  }

}
