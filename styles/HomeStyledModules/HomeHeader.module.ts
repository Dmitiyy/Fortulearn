import styled from "styled-components";
import { gradient } from "./HomeNav.module";

export const HeaderBlock = styled.div`
  width: 100%;
  height: 600px;
  background: ${gradient};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1320px) and (min-width: 300px) {
    padding-left: 20px;
    padding-right: 20px;
    height: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
  } 
`;

export const HeaderContainer = styled.div`
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1320px) and (min-width: 300px) {
    width: 100%;
  }
  @media (max-width: 1180px) and (min-width: 320px) {
    flex-direction: column;
  }
`;

export const HeaderWrapText = styled.div`
  width: 570px;
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-size: 60px;
  }
  p {
    font-size: 25px;
    margin-top: -20px;
  }
  @media (max-width: 1180px) and (min-width: 681px) {
    h1 {
      text-align: center;
    }
    p {
      text-align: center;
    }
    margin-bottom: 100px;
    margin-top: 30px;
  }
  @media (max-width: 680px) and (min-width: 320px) {
    h1 {
      text-align: center;
      font-size: 40px !important;
      margin-bottom: 40px;
    }
    p {
      font-size: 20px !important;
      text-align: center;
      color: #fff;
      margin-bottom: 30px;
      line-height: 40px;
    }
    margin-bottom: 50px;
    margin-top: 0px;
    height: 100%;
    width: 100%;
  } 
`;
export const HeaderPhotoColumn = styled.div`
  width: 250px;
  height: 375px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const HeaderWrapImages = styled.div`
  width: 525px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  @media (max-width: 680px) and (min-width: 320px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-bottom: 40px;
    ${HeaderPhotoColumn}:nth-child(2) {
      margin-top: 50px !important;
    }
    ${HeaderPhotoColumn} {
      height: 100%;

      div:nth-child(2) {
        margin-top: 40px !important;
      }
    }
  }
`;

export const HeaderWrapBtns = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 680px) and (min-width: 320px) {
    flex-direction: column;
    align-items: center;
    button {
      margin-top: 20px !important;
    }
  } 
`;

export const HeaderSignUpBtn = styled.button`
  width: 270px;
  height: 55px;
  background: transparent;
  border: 5px solid white;
  font-size: 22px;
  font-weight: bold;
  border-radius: 13px;
  cursor: pointer;
  color: white;
  transition: all 0.3s;
  &:hover {
    border: 5px solid black;
    color: black;
  }
`;

export const HeaderPhotoItem = styled.div`
  width: 100%;
  height: 170px;
  background: white;
  border-radius: 13px;
  box-shadow: 0px 0px 15px #000;
  img {
    border-radius: 13px;
  }
`;