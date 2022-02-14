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
import AlertSpan from "../components/AlertSpan";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { saltKey } from "../atoms";
import IMember from "../interface/IMember";
import IMemberForm from "../interface/IMemberForm";

function SignUp() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IMemberForm>();

  const history = useHistory();
  const salt = useRecoilValue(saltKey);

  // Click submit button, onValid is called by handleSubmit.
  const onValid = async ({
    id,
    password,
    passwordConfirm,
    name,
    birth,
    gender,
    address,
    email,
    phoneNumber,
  }: IMemberForm) => {
    // id check whether already registered.
    let exist;
    try {
      exist = await MemberService.getMemberById(id);
    } catch (err) {}
    if (exist !== undefined) {
      setError(
        "id",
        { message: "이미 등록된 아이디입니다." },
        { shouldFocus: true }
      );

      return;
    }

    // Password Confirm.
    if (password !== passwordConfirm) {
      setError(
        "passwordConfirm",
        { message: "비밀번호가 같지 않습니다." },
        { shouldFocus: true }
      );

      return;
    }

    // Convert gender string to isMale boolean.
    let isMale: boolean;
    isMale = gender === "male";

    // Encrypt password to hash.
    let CryptoJS = require("crypto-js");
    let hash = CryptoJS.AES.encrypt(password, salt).toString();

    // make member json.
    let member: IMember = {
      id,
      password: hash,
      name,
      birth: new Date(birth),
      isMale,
      address,
      email,
      phoneNumber,
      isAdmin: false,
    };

    // request createMember to MemberService.
    await MemberService.createMember(member);

    // SweetAlert2 Fire!
    await Swal.fire({
      icon: "success",
      title: "회원가입이 완료되었습니다.",
    });

    // If all process was completed, move to Log In router.
    history.push("/logIn");
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
            Password Confirm
          </FormLabelP>
          <FormInput
            type="password"
            autoComplete="on"
            id={"passwordCheck"}
            {...register("passwordConfirm", {
              required: "같은 비밀번호를 입력하세요.",
            })}
          />
        </FormLine>
        {errors?.passwordConfirm?.message ? (
          <AlertSpan msg={errors.passwordConfirm.message} />
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

        <FormLine
          style={{
            border: "0",
            marginTop: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <FormLabelP htmlFor="male">Male</FormLabelP>
          <FormInput
            type="radio"
            id="male"
            value="male"
            {...register("gender", { required: "성별을 선택하세요." })}
            style={{
              width: "25px",
              height: "25px",
            }}
          />
        </FormLine>
        <FormLine
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <FormLabelP htmlFor="female">Female</FormLabelP>
          <FormInput
            type="radio"
            id="female"
            value="female"
            {...register("gender", { required: "성별을 선택하세요." })}
            style={{
              width: "25px",
              height: "25px",
            }}
          />
        </FormLine>
        {errors?.gender?.message ? (
          <AlertSpan msg={errors.gender.message} />
        ) : (
          ""
        )}

        <FormLine>
          <FormLabelP htmlFor="address">Address</FormLabelP>
          <FormInput
            type="text"
            id={"address"}
            {...register("address", { required: "주소지를 입력하세요." })}
          />
        </FormLine>
        {errors?.address?.message ? (
          <AlertSpan msg={errors.address.message} />
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
          <FormInput
            type="tel"
            id={"phoneNumber"}
            {...register("phoneNumber", {
              required: "전화번호를 입력하세요.",
              pattern: {
                value: /[0-9]{3}-[0-9]{4}-[0-9]{4}/,
                message: "올바른 전화번호 형식을 입력하세요. ex. 010-0000-0000",
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
