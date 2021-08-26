import styled from "styled-components";

export const FooterBlock = styled.div`
  width: 100%;
  height: 200px;
  background: #3F81AA;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterContainer = styled.div`
  width: 1000px;
  display: flex;  
  justify-content: space-between;
  flex-basis: content;
  div img {
    width: 223px;
  }
  ul {
    list-style: none;
  }
  li {
    color: white;
    font-size: 20px;
    cursor: pointer;
    margin-top: 10px;
    &:nth-child(1) {
      margin-top: 0px;
      font-weight: bold;
      cursor: default;
    }
  }
`;