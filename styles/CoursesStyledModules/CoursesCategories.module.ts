import styled from "styled-components";

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