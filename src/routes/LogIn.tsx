import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  FormContainer,
  FormInput,
  FormLabelP,
  FormLine,
  FormShape,
  FormTitle,
  SubmitBtn,
} from "../css/styledForm";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLoginAtom, loggedMemberAtom, saltKey } from "../atoms";
import IMemberForm from "../interface/IMemberForm";
import AlertSpan from "../components/AlertSpan";
import MemberService from "../services/MemberService";
import IMember from "../interface/IMember";

function LogIn() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IMemberForm>();

  const history = useHistory();
  const salt = useRecoilValue(saltKey);
  const setIsLogin = useSetRecoilState(isLoginAtom);
  const setLoggedMember = useSetRecoilState(loggedMemberAtom);

  // Click submit button, onValid is called by handleSubmit.
  const onValid = async ({ id, password }: IMemberForm) => {
    // Find member object by id.
    let member: IMember;
    try {
      member = await MemberService.getMemberById(id).then((res) => res.data);
    } catch (err) {
      setError(
        "id",
        { message: "등록되지 않은 아이디입니다." },
        { shouldFocus: true }
      );

      return;
    }

    // Decrypt password and compare input password.
    let CryptoJS = require("crypto-js");
    let decrypted = CryptoJS.AES.decrypt(member.password, salt).toString(
      CryptoJS.enc.Utf8
    );
    if (decrypted !== password) {
      setError(
        "password",
        { message: "잘못된 비밀번호입니다." },
        { shouldFocus: true }
      );

      return;
    }

    // set isLogin to true;
    setIsLogin(true);
    setLoggedMember(member);

    // If all process was completed, move to Home router.
    history.push("/1");
  };

  return (
    <>
      <FormContainer>
        <FormShape onSubmit={handleSubmit(onValid)} style={{ height: "auto" }}>
          <FormTitle>Log In</FormTitle>

          <FormLine>
            <FormLabelP htmlFor="id">ID</FormLabelP>
            <FormInput
              type="text"
              {...register("id", { required: "아이디를 입력하세요." })}
            />
          </FormLine>
          {errors?.id?.message ? <AlertSpan msg={errors.id.message} /> : ""}

          <FormLine>
            <FormLabelP htmlFor="pw">PW</FormLabelP>
            <FormInput
              type="password"
              autoComplete="on"
              {...register("password", { required: "비밀번호를 입력하세요." })}
            />
          </FormLine>
          {errors?.password?.message ? (
            <AlertSpan msg={errors.password.message} />
          ) : (
            ""
          )}

          <SubmitBtn value="LOG IN" />

          <div style={{ textAlign: "center" }}>
            Don't you have ID? <Link to="/signUp">sign up</Link>
          </div>
        </FormShape>
      </FormContainer>
    </>
  );
}

export default LogIn;
