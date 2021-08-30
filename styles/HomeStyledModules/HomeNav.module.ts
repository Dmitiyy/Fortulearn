import styled from "styled-components";

export const gradient = 'linear-gradient(90.13deg, #6FC3F7 0.12%, #1813A2 99.88%)';

export const NavBlock = styled.div`
  width: 100%;
  height: 100px;
  background: ${gradient};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1320px) and (min-width: 300px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const NavContainer = styled.div`
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    cursor: pointer;
  }
  @media (max-width: 1320px) and (min-width: 300px) {
    width: 100%;
  }
`;

export const NavWrapText = styled.ul`
  width: 370px;
  display: flex;
  justify-content: space-between;
  list-style: none;
  color: white;
  font-size: 22px;
  align-items: center;
  li {
    cursor: pointer;
  }
  @media (max-width: 990px) and (min-width: 831px) {
    width: 300px;
  }
  @media (max-width: 830px) and (min-width: 300px) {
    display: none;
  }
`;

export const NavWrapBtns = styled.div`
  width: 230px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 830px) and (min-width: 300px) {
    display: none;
  }
`;

export const NavBtnLogIn = styled.p`
  color: white;
  font-size: 22px;
  cursor: pointer;
  @media (max-width: 830px) and (min-width: 300px) {
    display: none;
  }
`;

export const NavBurgerMenu = styled.div`
  width: 40px;
  height: 35px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  div {
    width: 100%;
    height: 6px;
    border-radius: 5px;
    background: #fff;
  }
  @media (max-width: 830px) and (min-width: 300px) {
    display: flex;
  }
`;

export const NavBurgerMenuList = styled.ul`
  width: 100%;
  padding: 20px;
  padding-top: 0px;
  background: ${gradient};
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    font-size: 20px;
    p {
      cursor: pointer;
      margin-top: 10px;
    }
  }
  ${NavBtnLogIn} {
    display: block;
    margin-right: 10px;
    font-size: 20px;
  }
  @media (min-width: 830px) {
    display: none !important;
  }
`;

export const NavBurgerMenuListWrap = styled.li`
  display: flex;
  align-items: center;
`;