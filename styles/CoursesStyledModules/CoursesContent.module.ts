import styled from "styled-components";
import AuthorPhoto from '../../images/courses_author.png';

export const CoursesContentBlock = styled.div`
  width: 1300px;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  justify-content: center;
`;

export const CoursesContentPhoto = styled.div`
  width: 260px;
  img {
    width: 100% !important;
    border-radius: 13px;
  }
`;

export const CoursesContentText = styled.div`
  width: 715px;
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
    margin-top: 20px;
    margin-right: 20px;
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

export const CoursesAuthorPhoto = styled.div`
  width: 160px;
  height: 200px;
  background-image: url(${AuthorPhoto.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 13px;
`;

export const CoursesContentAuthor = styled.div`
  width: 1015px;
  margin: 0 auto;
  margin-top: 60px;
`;

export const CoursesAuthorWrap = styled.div`
  width: 100%;
  height: 120px;
  background: #436ACC;
  justify-content: space-around;
  display: flex;
  margin-top: 60px;
  border-radius: 13px;
  align-items: center;
  margin-bottom: 70px;
`;

export const CoursesAuthorImgWrap = styled.div`
  display: flex;
  align-items: center;
  p, h2 {
    color: #fff;
    font-size: 20px;
    margin-left: 20px;
  }
  h2 {
    font-size: 25px;
    margin-bottom: 10px;
  }
`;