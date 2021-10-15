import styled from "styled-components";

interface ICourse {
  photo: StaticImageData
}

export const PersonalBlock = styled.div`
  width: 1015px;
  margin: 0 auto;
  margin-top: 60px;
  font-weight: bold;
  font-size: 18px;
  p {
    font-weight: normal;
    font-size: 20px;
    margin-top: 40px;
    text-align: center;
    span {
      font-weight: bold;
      cursor: pointer;  
    }
  }
`;

export const PersonalBlockEmpty = styled.div`
  display: flex;
  width: 367px;
  align-items: center;
  margin: 40px auto;
  p {
    font-weight: normal;
    margin-top: 0px;
    margin-right: 10px;
  }
`;

export const PersonalGrid = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 70px;
`;

export const PersonalGridItem = styled.div<ICourse>`
  width: 200px;
  height: 230px;
  background: #fff;
  box-shadow: 0px 0px 37px 4px rgba(0, 0, 0, 0.32);
  border-radius: 13px;
  cursor: pointer;
  div {
    width: 100%;
    height: 170px;
    background: url(${(props) => props.photo.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 13px 13px 0px 0px;
  }
  p {
    font-weight: normal;
    font-size: 20px;
    margin: 15px;
  }
`;

export const PersonalFeatures = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  div {
    width: 47%;
    div {
      background: #fff; 
      box-shadow: 0px 0px 37px 4px rgba(0, 0, 0, 0.32); 
      width: 100%;
      height: 300px;
      border-radius: 13px;
    }
    h2 {
      margin-bottom: 40px;
    }
  }
`;