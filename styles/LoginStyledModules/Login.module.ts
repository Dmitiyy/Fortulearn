import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 480px;
`;

export const LoginWrapForm = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.61);
  border-radius: 13px;
  margin-top: 23px;
  padding-top: 20px;
  padding-bottom: 35px;
  h2 {
    font-size: 40px;
    font-weight: bold;
    text-align: center;
  }
`;

export const LoginForm = styled.div`
  form {
    width: auto;
    height: auto;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      color: #db3939;
      font-size: 18px;
      margin-top: 5px;
    }
    input {
      border: none;
      padding-left: 20px;
      padding-right: 20px;
      font-size: 20px;
      background: #6FC3F7;
      width: 300px;
      height: 45px;
      border-radius: 13px;
      margin-top: 20px;
      outline: none;
      &::placeholder {
        color: #000;
      }
      &:nth-child(1) {
        margin-top: 0px;
      }
    }
    button {
      width: 200px;
      height: 45px;
      background: #1916A4;
      border-radius: 13px;
      margin-top: 20px;
      border: none;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
      &:disabled {
        opacity: 0.5;
        cursor: default;
      }
    }
  }
`;

export const LogInErrorModule = styled.div`
  width: 100%;
  height: 45px;
  background: #D96363;
  margin: 0 auto;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-size: 20px;
`;