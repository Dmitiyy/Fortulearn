import styled from "styled-components";

export const QuestionsBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  h1 {
    font-size: 32px;
    font-weight: bold;
  }
  p {
    font-size: 20px;
    margin-top: 10px;
  }
`;

export const QuestionsContainer = styled.div`
  width: 1000px;
  margin-top: 50px;
  display: flex;
`;

export const QuestionsWrapItems = styled.ul`
  width: 50%;
  list-style: none;
  li {
    font-size: 20px;
    cursor: pointer;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    border-radius: 13px 0 0 13px;
  }
`;

export const QuestionsWrapDescription = styled.div`
  width: 50%;
  background: #436ACC;
  padding: 20px;
  padding-top: 5px;
  border-radius: 0 13px 13px 0;
  p {
    line-height: 40px;
    color: #fff;
    font-size: 20px;
  }
`;