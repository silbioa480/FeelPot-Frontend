import axios from "axios";
import IMember from "../model/IMember";
import Member from "../model/Member";

const MEMBER_API_BASE_URL = "https://localhost:8080/api/members";

class MemberService {
  getMembers(): Promise<Member[]> {
    return axios.get<Member[]>(MEMBER_API_BASE_URL).then((res) => res.data);
  }

  createMember(member: Member) {
    return axios.post(MEMBER_API_BASE_URL, member);
  }

  getMemberById(memberId: IMember["id"]): Promise<Member> {
    return axios
      .get(MEMBER_API_BASE_URL + "/" + memberId)
      .then((res) => res.data);
  }

  updateMember(member: Member, memberId: IMember["id"]) {
    return axios.put(MEMBER_API_BASE_URL + "/" + memberId, member);
  }

  deleteMember(memberId: IMember["id"]) {
    return axios.delete(MEMBER_API_BASE_URL + "/" + memberId);
  }
}

export default new MemberService();
