import styled from "styled-components";
import Photo from '../../images/teacher_photo.png';

export const TeacherBlock = styled.div`
  width: 1015px;
  margin: 0 auto;
  margin-top: 60px;
`;

export const TeacherHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TeacherHeaderText = styled.div`
  width: 60%;
  span {
    font-size: 20px;
    color: #1B1AA6;
    font-weight: 700;
  }
  p {
    font-size: 20px;
    color: #000;
    line-height: 40px;
    margin-top: 25px;
  }
  h2 {
    font-size: 45px;
    font-weight: 900;
  }
`;

export const TeacherHeaderPhoto = styled.div`
  width: 270px;
  background-image: url(${Photo.src});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 13px;
  box-shadow: 0px 0px 37px 4px rgba(0, 0, 0, 0.32);
`;

export const TeacherAvailable = styled.div`
  width: 100%;
  margin-top: 60px;
  h3 {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const TeacherAvailableSlider = styled.div`
  width: 100%;
  height: 300px;
  background-color: #3F81AA;
  border-radius: 13px;
  margin-top: 60px;
  padding-top: 20px;
  box-shadow: 0px 0px 37px 4px rgba(0, 0, 0, 0.32);
  h3 {
    color: #fff;
    margin-left: 25px;
    font-weight: 700;
    font-size: 20px;
  }
`;

export const TeacherSliderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 13px;
`;