import styled from "styled-components";

export const gradient = 'linear-gradient(90.13deg, #6FC3F7 0.12%, #1813A2 99.88%)';

export const NavBlock = styled.div`
  width: 100%;
  height: 100px;
  background: ${gradient};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavContainer = styled.div`
  width: 1300px;
  display: flex;
  justify-content: space-between;
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
`;

export const NavWrapBtns = styled.div`
  width: 230px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavBtnLogIn = styled.p`
  color: white;
  font-size: 22px;
  cursor: pointer;
`;