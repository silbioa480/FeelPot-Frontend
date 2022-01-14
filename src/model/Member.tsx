import IMember from "./IMember";

class Member implements IMember {
  id: string;
  password: string;
  name: string;
  birth: Date;
  isMale: boolean;
  email: string;
  phoneNumber: string;

  constructor(_member: IMember) {
    this.id = _member.id;
    this.password = _member.password;
    this.name = _member.name;
    this.birth = _member.birth;
    this.isMale = _member.isMale;
    this.email = _member.email;
    this.phoneNumber = _member.phoneNumber;
  }
}

export default Member;
