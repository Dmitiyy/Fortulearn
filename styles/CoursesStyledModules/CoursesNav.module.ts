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
  align-items: center;
  img {
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