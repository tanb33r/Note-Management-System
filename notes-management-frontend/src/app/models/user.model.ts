export class User {
    name: string;
    email: string;
    password: string;
    dateOfBirth: any;
  
    constructor(name: string = '', email: string = '', password: string = '', dateOfBirth: any = '') {
      this.name = name;
      this.email = email;
      this.password = password;
      this.dateOfBirth = dateOfBirth;
    }
  }
  