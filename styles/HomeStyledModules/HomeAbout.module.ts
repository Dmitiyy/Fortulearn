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
`;

export const AboutImage = styled.div`
  width: 250px;
  height: 250px;
  background: lightblue;
`;