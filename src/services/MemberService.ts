import axios, { AxiosResponse } from "axios";
import IMember from "../interface/IMember";

const MEMBER_API_BASE_URL =
  "https://feel-pot-backend.herokuapp.com/api/members";

class MemberService {
  getMembers() {
    return axios.get<IMember[]>(MEMBER_API_BASE_URL);
  }

  createMember(member: IMember) {
    return axios.post(MEMBER_API_BASE_URL, member);
  }

  getMemberById(memberId: IMember["id"]): Promise<AxiosResponse<IMember>> {
    return axios.get(MEMBER_API_BASE_URL + "/" + memberId);
  }

  updateMember(
    member: IMember,
    memberId: IMember["id"]
  ): Promise<AxiosResponse<IMember>> {
    return axios.put(MEMBER_API_BASE_URL + "/" + memberId, member);
  }

  deleteMember(memberId: IMember["id"]) {
    return axios.delete(MEMBER_API_BASE_URL + "/" + memberId);
  }
}

export default new MemberService();
