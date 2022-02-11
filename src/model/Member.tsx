import IMember from "./IMember";

class Member implements IMember {
  private _id: string;
  private _password: string;
  private _name: string;
  private _birth: Date;
  private _isMale: boolean;
  private _email: string;
  private _phoneNumber: string;
  private _isAdmin: boolean;

  constructor(
    id: string,
    password: string,
    name: string,
    birth: Date,
    isMale: boolean,
    email: string,
    phoneNumber: string,
    isAdmin: boolean
  ) {
    this._id = id;
    this._password = password;
    this._name = name;
    this._birth = birth;
    this._isMale = isMale;
    this._email = email;
    this._phoneNumber = phoneNumber;
    this._isAdmin = isAdmin;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get birth(): Date {
    return this._birth;
  }

  set birth(value: Date) {
    this._birth = value;
  }

  get isMale(): boolean {
    return this._isMale;
  }

  set isMale(value: boolean) {
    this._isMale = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  get isAdmin(): boolean {
    return this._isAdmin;
  }

  set isAdmin(value: boolean) {
    this._isAdmin = value;
  }
}

export default Member;
