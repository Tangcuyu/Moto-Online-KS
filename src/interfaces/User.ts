export class User {
  email: string;
  password?: string;
  phone: string;
  active?: boolean;
  avatar?: string;
  brief?: string;
  isAdmin?: boolean;
  name?: string;

  constructor(data) {
    this.email = data.email;
    this.password = data.matchingPasswords.password;
    this.phone = data.phone;
  }
}
