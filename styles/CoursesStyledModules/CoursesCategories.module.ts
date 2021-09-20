import styled from "styled-components";
import Bg from '../../images/categoires_test.png';

export const CategoriesBlock = styled.div`
  width: 1300px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

export const CategoriesBlockTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 30px;
  }
  div {
    display: flex;
    input {
      width: 300px;
      height: 50px;
      border: 5px solid #3F81AA;
      outline: none;
      padding-left: 20px;
      padding-right: 20px;
      font-size: 20px;
      border-radius: 13px;
    }
    div {
      width: 50px;
      height: 50px;
      background: #3F81AA;
      border-radius: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 15px;
      cursor: pointer;
      img {
        min-height: 30px !important;
        min-width: 30px !important;
      }
    }
  }
`;

export const CategoriesWrap = styled.div`
  width: 100%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, auto);
  grid-column-gap: 20px;
  div {
    background: #6EC1F6;
    border-radius: 13px;
    cursor: pointer;
    div {
      border-radius: 13px 13px 0 0 !important;
    }
    p {
      margin-top: 20px;
      margin-bottom: 20px;
      margin-left: 20px;
      font-size: 23px;
      font-weight: bold;
    }
  }
`;

export const CategoriesCourseContent = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  opacity: 0;
  transition: all 0.3s;
  p {
    margin-bottom: 30px;
  }
`;

export const CategoriesCourse = styled.div`
  width: 200px;
  height: 200px;
  background: url(${Bg.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  border-radius: 13px;
  transition: all 0.3s;
  &:hover ${CategoriesCourseContent} {
    opacity: 1;
  }
`;

export const CategoriesCourseWrap = styled.div`
  width: 1100px !important;
  display: flex !important;
  justify-content: space-around !important;
`;

export const CategoriesSliderWrap = styled.div`
  width: 1300px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 50px;
`;

export const CategoriesSliderRightArrow = styled.div`
  width: 70px;  
  height: 70px;
  background: #6EC1F6;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  cursor: pointer;
  div {
    width: 20px !important;
    height: 30px !important;
  }
`;

export const CategoriesSliderLeftArrow = styled.div`
  width: 70px;
  height: 70px;
  background: #6EC1F6;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  cursor: pointer;
  div {
    transform: rotate(180deg);
    width: 20px !important;
    height: 30px !important;
  }
`;

export const CategoriesPug = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
`;

export const CategoriesPugItem = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 13px;
  background: #fff;
  color: #000;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;