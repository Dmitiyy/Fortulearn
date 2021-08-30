import styled from "styled-components";

type TCard = {blockColor: string, textColor: string};

export const YouBlock = styled.div`
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
  @media (max-width: 1320px) and (min-width: 300px) {
    padding-left: 20px;
    padding-right: 20px;
    p {
      text-align: center;
    }
  }
`;

export const YouCardContainer = styled.div`
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
`;

export const YouContainer = styled.div`
  width: 700px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  @media (max-width: 720px) and (min-width: 300px) {
    width: 100%;
    align-items: center;
    flex-direction: column;
  }
`;

export const YouCard = styled.div<TCard>`
  width: 300px;
  height: 480px;
  background: ${props => props.blockColor};
  color: ${props => props.textColor};
  border-radius: 13px;
  filter: drop-shadow(0px 5px 56px rgba(0, 0, 0, 0.4));
  img {
    width: 100%;
  }
  h2 {
    font-size: 23px;
  }
  p {
    margin-top: 20px;
    font-size: 20px;
    margin-bottom: 20px;
    text-align: left;
  }
  @media (max-width: 357px) and (min-width: 300px) {
    height: 460px;
    width: 100%;
  }
`;