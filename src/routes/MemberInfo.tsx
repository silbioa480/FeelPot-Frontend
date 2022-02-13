import { useRecoilValue } from "recoil";
import { loggedMemberAtom } from "../atoms";

function MemberInfo() {
  const loggedMember = useRecoilValue(loggedMemberAtom);

  const birth = new Date(loggedMember.birth);
  const birthStr =
    birth.getFullYear() +
    "년 " +
    birth.getMonth() +
    "월 " +
    birth.getDay() +
    "일";

  return (
    <>
      <div>환영합니다. {loggedMember.id} 님</div>
      <div>이름: {loggedMember.name}</div>
      <div>성별: {loggedMember.isMale ? "남성" : "여성"}</div>
      <div>주소: {loggedMember.address}</div>
      <div>생년월일: {birthStr}</div>
      <div>이메일: {loggedMember.email}</div>
      <div>전화번호: {loggedMember.phoneNumber}</div>
    </>
  );
}

export default MemberInfo;
