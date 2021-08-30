import styled from "styled-components";
import Bg from '../../images/motivation_courses.png';

export const MotivationBlock = styled.div`
  width: 1300px;
  height: 400px;
  background-image: url(${Bg.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 13px;
`;

export const MotivationBlockContent = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MotivationContentMessage = styled.div`
  width: 75%;
  color: #fff;
  font-size: 35px;
  p {
    width: 80%;
    line-height: 50px;
    font-family: 'Leckerli One', cursive;
  }
`;

export const MotivationContentAuthor = styled.div`
  width: 75%;
  color: #fff;
  font-size: 35px;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  font-family: 'Leckerli One', cursive;
`;
