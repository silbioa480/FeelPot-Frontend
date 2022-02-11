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
import MemberService from "../services/MemberService";
import Member from "../model/Member";
import AlertSpan from "../components/AlertSpan";

interface ICreateMemberForm {
  id: string;
  password: string;
  passwordCheck: string;
  name: string;
  birth: Date;
  isMale: boolean;
  email: string;
  phoneNumber: string;
}

function SignUp() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ICreateMemberForm>();

  const onValid = async ({
    id,
    password,
    passwordCheck,
    name,
    birth,
    isMale,
    email,
    phoneNumber,
  }: ICreateMemberForm) => {
    if (id === (await MemberService.getMemberById(id)?.then((res) => res.id))) {
      setError(
        "id",
        { message: "이미 등록된 아이디입니다." },
        { shouldFocus: true }
      );

      return;
    }

    if (password !== passwordCheck) {
      setError(
        "passwordCheck",
        { message: "비밀번호가 같지 않습니다." },
        { shouldFocus: true }
      );

      return;
    }

    let member: Member = new Member(
      id,
      password,
      name,
      birth,
      isMale,
      email,
      phoneNumber,
      false
    );

    console.log(member);
    await MemberService.createMember(member);
  };

  return (
    <FormContainer>
      <FormShape onSubmit={handleSubmit(onValid)} style={{ height: "auto" }}>
        <FormTitle>Sign Up</FormTitle>

        <FormLine>
          <FormLabelP htmlFor="id">ID</FormLabelP>
          <FormInput
            type="text"
            id={"id"}
            {...register("id", { required: "아이디를 입력하세요." })}
          />
        </FormLine>
        {errors?.id?.message ? <AlertSpan msg={errors.id.message} /> : ""}

        <FormLine>
          <FormLabelP htmlFor="password" style={{ right: "43%" }}>
            Password
          </FormLabelP>
          <FormInput
            type="password"
            autoComplete="on"
            id={"password"}
            {...register("password", {
              required: "비밀번호를 입력하세요.",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  "최소 8 자, 최소 하나의 문자 및 하나의 숫자를 입력하세요.",
              },
            })}
          />
        </FormLine>
        {errors?.password?.message ? (
          <AlertSpan msg={errors.password.message} />
        ) : (
          ""
        )}

        <FormLine>
          <FormLabelP htmlFor="passwordCheck" style={{ right: "43%" }}>
            Password Check
          </FormLabelP>
          <FormInput
            type="password"
            autoComplete="on"
            id={"passwordCheck"}
            {...register("passwordCheck", {
              required: "같은 비밀번호를 입력하세요.",
            })}
          />
        </FormLine>
        {errors?.passwordCheck?.message ? (
          <AlertSpan msg={errors.passwordCheck.message} />
        ) : (
          ""
        )}

        <FormLine>
          <FormLabelP htmlFor="name">Name</FormLabelP>
          <FormInput
            type="text"
            id={"name"}
            {...register("name", { required: "이름을 입력하세요." })}
          />
        </FormLine>
        {errors?.name?.message ? <AlertSpan msg={errors.name.message} /> : ""}

        <FormLine>
          <FormLabelP htmlFor="birth" style={{ right: "43%" }}>
            Birth Date
          </FormLabelP>
          <FormInput
            type="date"
            id={"birth"}
            {...register("birth", { required: "생년월일을 입력하세요." })}
          />
        </FormLine>
        {errors?.birth?.message ? <AlertSpan msg={errors.birth.message} /> : ""}

        <FormLine style={{ marginTop: "50px" }}>
          <div>
            <FormLabelP htmlFor="male" style={{ top: "0", right: "39%" }}>
              Male
            </FormLabelP>
            <FormInput
              type="radio"
              id="male"
              value="male"
              {...register("isMale", { required: true })}
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
              value="female"
              {...register("isMale", { required: true })}
              style={{
                position: "relative",
                right: "-46%",
                width: "100px",
              }}
            />
          </div>
        </FormLine>
        {errors?.isMale?.message ? (
          <AlertSpan msg={errors.isMale.message} />
        ) : (
          ""
        )}

        <FormLine>
          <FormLabelP htmlFor="email">E-mail</FormLabelP>
          <FormInput
            type="email"
            autoComplete="on"
            id={"email"}
            {...register("email", {
              required: "이메일을 입력하세요.",
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message: "올바른 이메일 형식을 입력하세요.",
              },
            })}
          />
        </FormLine>
        {errors?.email?.message ? <AlertSpan msg={errors.email.message} /> : ""}

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
            id={"phoneNumber"}
            {...register("phoneNumber", {
              required: "전화번호를 입력하세요.",
              pattern: {
                value: /[0-9]{3}-[0-9]{4}-[0-9]{4}/,
                message: "올바른 전화번호 형식을 입력하세요.",
              },
            })}
          />
        </FormLine>
        {errors?.phoneNumber?.message ? (
          <AlertSpan msg={errors.phoneNumber.message} />
        ) : (
          ""
        )}

        <SubmitBtn value="Sign Up" />
      </FormShape>
    </FormContainer>
  );
}

export default SignUp;
