export class User {

  constructor(
    public id: number,
    public name: string,
    public dateOfBirth: Date,
    public address: string,
    public zipcode: string,
    public newsletter?: boolean,
    public gender?: string
  ) {}
}
