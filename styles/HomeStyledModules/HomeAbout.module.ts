import styled from "styled-components";

export const AboutBlock = styled.div`
  width: 100%;
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 32px;
    font-weight: bold;
  }
  p {
    font-size: 20px;
    margin-top: 10px;
  }
  @media (max-width: 1320px) and (min-width: 300px) {
    padding-left: 20px;
    padding-right: 20px;
    p {
      text-align: center;
    }
  } 
`;

export const AboutContainer = styled.div`
  width: 1300px;
  height: 300px;
  background: #436ACC;
  border-radius: 13px;
  filter: drop-shadow(0px 6px 56px rgba(0, 0, 0, 0.4));
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    width: 800px;
    line-height: 40px;
    font-size: 20px;
    color: white;
    margin-left: 20px;
  }
  img {
    width: 450px;
  }
  @media (max-width: 1320px) and (min-width: 300px) {
    width: 100%;
  }
  @media (max-width: 1000px) and (min-width: 320px) {
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 20px;
    div {
      display: none !important;
    }
    p {
      width: 100%;
      font-size: 20px;
      margin-top: 0px;
      margin-left: 0px;
      text-align: left;
    }
  }
`;

export const AboutImage = styled.div`
  width: 250px;
  height: 250px;
  background: lightblue;
`;