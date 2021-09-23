import styled from "styled-components";

export const CoursesContentBlock = styled.div`
  width: 1300px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const CoursesContentPhoto = styled.div`
  width: 20%;
  img {
    width: 100% !important;
    border-radius: 13px;
  }
`;

export const CoursesContentText = styled.div`
  width: 55%;
  margin-left: 40px;
  h2 {
    font-weight: bold;
    font-size: 25px;
  }
  p {
    font-size: 20px;
    margin-top: 20px;
    line-height: 40px;
  }
`;

export const CoursesContentWrap = styled.div`
  display: flex;
  div {
    display: flex;
    align-items: center;
    margin-top: 10px;
    img {
      width: 30px !important;
      height: 20px !important;
    }
    p {
      font-size: 20px;
      margin-left: 10px;
    }
  }
`;