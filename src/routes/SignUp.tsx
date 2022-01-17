import { useState } from "react";
import { Alert } from "react-bootstrap";
import {
  FormContainer,
  FormInput,
  FormLabelP,
  FormLine,
  FormShape,
  FormTitle,
  SubmitBtn,
} from "../css/styledForm";
import Member from "../model/Member";

function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState<Date>(new Date());
  const [isMale, setIsMale] = useState(true);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDateChange, setIsDateChange] = useState(false);
  const [isMaleChange, setIsMaleChange] = useState(false);

  const [isWarning, setIsWarning] = useState(false);
  const [warningMsg, setWarningMsg] = useState("");
  const [warningPosition, setWarningPosition] = useState("");

  function wakeWarning(msg: string, position: string, focusId: string) {
    setWarningPosition(position);
    setWarningMsg(msg);
    setIsWarning(true);
    setTimeout(() => setIsWarning(false), 2000);
    document.getElementById(focusId)?.focus();
  }

  const handleChangeId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.currentTarget.value);
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  const handleChangeBirth = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBirth(new Date(event.currentTarget.value));
    setIsDateChange(true);
  };
  const handleChangeIsMale = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (
      event.currentTarget.id === "male" &&
      event.currentTarget.value === "on"
    ) {
      setIsMale(true);
    } else setIsMale(false);

    setIsMaleChange(true);
  };
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePN = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();

    if (!id) {
      wakeWarning("아이디를 입력하세요.", "-83%", "id");
      return false;
    } else if (!password) {
      wakeWarning("비밀번호를 입력하세요.", "-74%", "password");
      return false;
    } else if (!name) {
      wakeWarning("이름을 입력하세요.", "-65%", "name");
      return false;
    } else if (!isDateChange) {
      wakeWarning("생년월일을 입력하세요.", "-56%", "birth");
      return false;
    } else if (!isMaleChange) {
      wakeWarning("성별을 선택하세요.", "-47%", "male");
      return false;
    } else if (!email) {
      wakeWarning("이메일을 입력하세요.", "-34%", "email");
      return false;
    } else if (!phoneNumber) {
      wakeWarning("전화번호를 입력하세요.", "-25%", "phoneNumber");
      return false;
    }

    let member = new Member({
      id,
      password,
      name,
      birth,
      isMale,
      email,
      phoneNumber,
    });

    console.log(member);

    alert("회원가입 완료!");
  };

  return (
    <FormContainer>
      <FormShape onSubmit={handleSubmit} style={{ height: "1100px" }}>
        <FormTitle>Sign Up</FormTitle>

        <FormLine>
          <FormLabelP htmlFor="id">ID</FormLabelP>
          <FormInput type="text" id="id" value={id} onChange={handleChangeId} />
        </FormLine>

        <FormLine>
          <FormLabelP htmlFor="password" style={{ right: "43%" }}>
            Password
          </FormLabelP>
          <FormInput
            type="password"
            id="password"
            value={password}
            onChange={handleChangePassword}
            autoComplete="on"
          />
        </FormLine>

        <FormLine>
          <FormLabelP htmlFor="name">Name</FormLabelP>
          <FormInput
            type="text"
            id="name"
            value={name}
            onChange={handleChangeName}
          />
        </FormLine>

        <FormLine>
          <FormLabelP htmlFor="birth" style={{ right: "43%" }}>
            Birth Date
          </FormLabelP>
          <FormInput type="date" id="birth" onChange={handleChangeBirth} />
        </FormLine>

        <FormLine style={{ marginTop: "50px" }}>
          <div>
            <FormLabelP htmlFor="male" style={{ top: "0", right: "39%" }}>
              Male
            </FormLabelP>
            <FormInput
              type="radio"
              id="male"
              name="isMale"
              onChange={handleChangeIsMale}
              style={{
                position: "relative",
                right: "-46.8%",
                width: "100px",
                margin: "10px 0",
              }}
            />
          </div>
          <div>
            <FormLabelP htmlFor="female" style={{ top: "0", right: "38%" }}>
              Female
            </FormLabelP>
            <FormInput
              type="radio"
              id="female"
              name="isMale"
              onChange={handleChangeIsMale}
              style={{
                position: "relative",
                right: "-46%",
                width: "100px",
              }}
            />
          </div>
        </FormLine>

        <FormLine>
          <FormLabelP htmlFor="email">E-mail</FormLabelP>
          <FormInput
            type="email"
            id="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </FormLine>

        <FormLine>
          <FormLabelP htmlFor="phoneNumber" style={{ right: "33%" }}>
            Phone Number
          </FormLabelP>
          <FormLabelP
            htmlFor="phoneNumber"
            style={{ right: "-35%", top: "30px" }}
          >
            ex. 010-0000-0000
          </FormLabelP>
          <FormInput
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
            onChange={handleChangePN}
          />
        </FormLine>

        <SubmitBtn value="Sign Up" />

        <Alert
          show={isWarning}
          variant={"danger"}
          style={{ top: `${warningPosition}` }}
        >
          {warningMsg}
        </Alert>
      </FormShape>
    </FormContainer>
  );
}

export default SignUp;
