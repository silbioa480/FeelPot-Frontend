import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormShape = styled.form`
  width: 70%;
  height: 600px;
  padding: 30px 20px;
  background-color: #ffffff;
  text-align: center;
  border-radius: 15px;
`;

export const FormTitle = styled.h2`
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  margin: 50px;
`;

export const FormLine = styled.div`
  border-bottom: 2px solid #7467e9;
  margin: 0 30px;
  padding: 10px 10px;
  display: flex;
  justifycontent: space-between;
`;

export const FormInput = styled.input`
  text-align: end;
  width: 100%;
  border: none;
  outline: none;
  color: #636e72;
  font-size: 16px;
  height: 25px;
  background: none;
  padding-top: 50px;
  padding-bottom: 10px;
`;

export const SubmitBtn = styled.input.attrs({ type: "submit" })`
  left: 40%;
  margin-top: 100px;
  margin-bottom: 50px;
  width: 80%;
  height: 40px;
  background: linear-gradient(125deg, #81ecec, #6c5ce7, #81ecec);
  background-position: left;
  background-size: 200%;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: 0.4s;
  display: inline;
`;

export const FormLabelP = styled.label`
  width: 20%;
  text-align: start;
  display: block;
  align-self: end;
  opacity: 0.7;
`;
