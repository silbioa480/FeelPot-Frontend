import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FormContainer,
  FormInput,
  FormLabelP,
  FormLine,
  FormShape,
  FormTitle,
  SubmitBtn,
} from "../css/styledForm";

function LogIn() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const [isWarning, setIsWarning] = useState(false);
  const [warningMsg, setWarningMsg] = useState("");
  const [warningPosition, setWarningPosition] = useState("");

  const handleChangeId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.currentTarget.value);
  };
  const handleChangePw = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPw(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();

    if (!id) {
      setWarningPosition("-65%");
      setWarningMsg("아이디를 입력하세요.");
      setIsWarning(true);
      setTimeout(() => setIsWarning(false), 2000);
      document.getElementById("id")?.focus();

      return false;
    } else if (!pw) {
      setWarningPosition("-48%");
      setWarningMsg("비밀번호를 입력하세요.");
      setIsWarning(true);
      setTimeout(() => setIsWarning(false), 2000);
      document.getElementById("pw")?.focus();

      return false;
    }

    setId("");
    setPw("");

    alert("로그인 완료!");
  };

  return (
    <>
      <FormContainer>
        <FormShape onSubmit={handleSubmit}>
          <FormTitle>Login</FormTitle>

          <FormLine>
            <FormLabelP htmlFor="id">ID</FormLabelP>
            <FormInput
              type="text"
              id="id"
              value={id}
              onChange={handleChangeId}
            />
          </FormLine>

          <FormLine>
            <FormLabelP htmlFor="pw">PW</FormLabelP>
            <FormInput
              type="password"
              autoComplete="on"
              id="pw"
              value={pw}
              onChange={handleChangePw}
            />
          </FormLine>

          <SubmitBtn value="LOG IN" />

          <div style={{ textAlign: "center" }}>
            Don't you have ID? <Link to="/signUp">sign up</Link>
          </div>

          <Alert
            show={isWarning}
            variant={"danger"}
            style={{ top: `${warningPosition}` }}
          >
            {warningMsg}
          </Alert>
        </FormShape>
      </FormContainer>
    </>
  );
}

export default LogIn;
