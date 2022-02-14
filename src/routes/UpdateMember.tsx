import {
  FormInput,
  FormLabelP,
  FormLine,
  FormShape,
  FormTitle,
  SubmitBtn,
} from "../css/styledForm";
import AlertSpan from "../components/AlertSpan";
import { useForm } from "react-hook-form";
import IMemberForm from "../interface/IMemberForm";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loggedMemberAtom } from "../atoms";
import MemberService from "../services/MemberService";
import Swal from "sweetalert2";
import IMember from "../interface/IMember";

function UpdateMember() {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IMemberForm>();

  const [loggedMember, setLoggedMember] = useRecoilState(loggedMemberAtom);
  const history = useHistory();

  const date = new Date(loggedMember.birth).toISOString().slice(0, 10);

  useEffect(() => {
    setValue("name", loggedMember.name);
    setValue("birth", date);
    setValue("gender", loggedMember.isMale ? "male" : "female");
    setValue("address", loggedMember.address);
    setValue("email", loggedMember.email);
    setValue("phoneNumber", loggedMember.phoneNumber);
  }, []);

  const onValid = async ({
    name,
    birth,
    gender,
    address,
    email,
    phoneNumber,
  }: IMemberForm) => {
    let member: IMember = {
      id: loggedMember.id,
      password: loggedMember.password,
      name,
      birth: new Date(birth),
      isMale: gender === "male",
      address,
      email,
      phoneNumber,
      isAdmin: false,
    };

    setLoggedMember(
      await MemberService.updateMember(member, loggedMember.id).then(
        (res) => res.data
      )
    );

    await Swal.fire({
      icon: "success",
      title: "회원 정보가 수정되었습니다.",
    });

    history.push("/member/" + loggedMember.id);
  };

  return (
    <FormShape
      onSubmit={handleSubmit(onValid)}
      style={{ width: "90%", height: "auto" }}
    >
      <FormTitle>Update</FormTitle>

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
      {errors?.gender?.message ? <AlertSpan msg={errors.gender.message} /> : ""}

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

      <SubmitBtn value="Update" />
    </FormShape>
  );
}

export default UpdateMember;
