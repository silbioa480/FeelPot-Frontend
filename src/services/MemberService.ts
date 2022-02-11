import axios from "axios";
import IMember from "../model/IMember";

const MEMBER_API_BASE_URL = "http://localhost:8080/api/members";

class MemberService {
  getMembers() {
    return axios.get<IMember[]>(MEMBER_API_BASE_URL);
  }

  createMember(member: IMember) {
    return axios.post(MEMBER_API_BASE_URL, member);
  }

  getMemberById(memberId: IMember["id"]) {
    return axios.get(MEMBER_API_BASE_URL + "/" + memberId);
  }

  updateMember(member: IMember, memberId: IMember["id"]) {
    return axios.put(MEMBER_API_BASE_URL + "/" + memberId, member);
  }

  deleteMember(memberId: IMember["id"]) {
    return axios.delete(MEMBER_API_BASE_URL + "/" + memberId);
  }
}

export default new MemberService();
