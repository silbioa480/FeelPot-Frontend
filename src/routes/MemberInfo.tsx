import { useRecoilValue } from "recoil";
import { loggedMemberAtom } from "../atoms";
import { Table } from "react-bootstrap";

function MemberInfo() {
  const loggedMember = useRecoilValue(loggedMemberAtom);

  const birth = new Date(loggedMember.birth);
  const birthStr =
    birth.getFullYear() +
    "년 " +
    (birth.getMonth() + 1) +
    "월 " +
    birth.getDate() +
    "일";

  return (
    <Table striped bordered hover style={{ width: "90%" }}>
      <thead>
        <tr>
          <th colSpan={2} style={{ textAlign: "center", fontWeight: "bold" }}>
            환영합니다. {loggedMember.id} 님
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td style={{ width: "30%" }}>이름</td>
          <td>{loggedMember.name}</td>
        </tr>

        <tr>
          <td style={{ width: "30%" }}>성별</td>
          <td>{loggedMember.isMale ? "남성" : "여성"}</td>
        </tr>

        <tr>
          <td style={{ width: "30%" }}>생년월일</td>
          <td>{birthStr}</td>
        </tr>

        <tr>
          <td style={{ width: "30%" }}>주소</td>
          <td>{loggedMember.address}</td>
        </tr>

        <tr>
          <td style={{ width: "30%" }}>이메일</td>
          <td>{loggedMember.email}</td>
        </tr>

        <tr>
          <td style={{ width: "30%" }}>전화번호</td>
          <td>{loggedMember.phoneNumber}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MemberInfo;
