import styled from "styled-components";

export const CoursesNavBlock = styled.div`
  width: 1300px;
  height: 80px;
  background: linear-gradient(90deg, #6EC1F6 0%, #1B1AA6 100%);
  border-radius: 13px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  align-items: center;
  img {
    cursor: pointer;
    min-height: 50px !important;
  }
`; 

export const CoursesNavWrap = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  img {
    min-width: 23px !important;
    min-height: 15px !important;
    margin-left: 10px !important;
  }
`;

export const CoursesNavSettings = styled.div`
  width: 200px;
  padding: 20px;
  background: #fff;
  box-shadow: 0px 0px 37px 4px rgba(0, 0, 0, 0.32);
  border-radius: 13px;
  padding-bottom: 10px !important;
  position: absolute;
  top: 100px;
  right: 0;
  p {
    font-size: 20px;
    margin-bottom: 10px;
    cursor: pointer;
  }
`;