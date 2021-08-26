import styled from "styled-components";
import { gradient } from "./HomeNav.module";

export const HeaderBlock = styled.div`
  width: 100%;
  height: 600px;
  background: ${gradient};
  /* border-top: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  width: 1300px;
  /* background: lightgrey; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderWrapText = styled.div`
  width: 570px;
  height: 370px;
  /* background: grey; */
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
`;

export const HeaderWrapImages = styled.div`
  width: 525px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
`;

export const HeaderWrapBtns = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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

export const HeaderPhotoColumn = styled.div`
  width: 250px;
  height: 375px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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