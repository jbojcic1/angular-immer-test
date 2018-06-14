import { Address } from './address';

export class User {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  address: Address;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
