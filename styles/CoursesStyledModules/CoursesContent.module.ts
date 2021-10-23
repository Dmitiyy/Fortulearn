import styled from "styled-components";

interface IContentPhoto {
  photo: string
}

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

export const CoursesContentImg = styled.div<IContentPhoto>`
  width: 100%;
  height: 230px;
  border-radius: 13px;
  background-image: url(${(props) => props.photo});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
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

export const CoursesAuthorPhoto = styled.div<{photo: string}>`
  width: 160px;
  height: 200px;
  background-image: url(${props => props.photo});
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
  margin-bottom: 90px;
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

export const CoursesContentParticipants = styled.div`
  width: 1015px;
  margin: 0 auto;
`;

export const CoursesParticipantsWrap = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: repeat(5, 180px);
  grid-template-rows: auto;
  grid-gap: 29px 29px;
  margin-top: 30px;
`;

export const CoursesParticipantsItem = styled.div<{photo: string}>`
  width: 180px;
  height: 180px;
  background: url(${(props) => props.photo});
  border-radius: 13px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;
`;

export const CoursesParticipantsInner = styled.div`
  background: linear-gradient(200deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 13px;
  h3 {
    opacity: 0.6;
    color: #fff;
  }
`;

export const CoursesContentSchedule = styled.div`
  width: 1015px;
  margin: 0 auto;
  margin-top: 60px;
  table {
    width: 100%;
    text-align: center;
    margin-top: 30px;
    background: #6FC3F7;
    border-collapse: collapse;
    border-radius: 13px;
    font-size: 20px;
    border-style: hidden;
  }
  thead tr th, tbody tr td {
    border: 3px solid #000;
    height: 70px;
  }
`;

export const CoursesContentJoin = styled.div`
  width: 1015px;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  align-items: center;
  p {
    margin-left: 30px;
    font-size: 20px;
  }
`;