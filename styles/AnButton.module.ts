import styled from 'styled-components';

interface CustomeProps {
  iColor: string
  hColor: string
  size: string
}

type TButton = {iColor: string, width: string, height: string}
type TButtonBlock = {hColor: string}

export const Button = styled.div<TButton>`
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.iColor};
  border-radius: 13px;
  cursor: pointer;
  position: relative;
`;

export const ButtonInsideBlock = styled.div<TButtonBlock>`
  width: 100%;
  height: 100%;
  background: ${props => props.hColor};
  position: absolute;
  border-radius: 13px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  transition: all 0.2s;
  transform: scale(0);
  opacity: 0;
`;

export const ButtonInsideText = styled.div<CustomeProps>`
  width: 100%;
  height: 100%;
  background: transparent;
  position: absolute;
  border-radius: 13px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  color: ${props => props.iColor};
  font-weight: bold;
  font-size: ${props => props.size};
  &:hover + ${ButtonInsideBlock} {
    transform: scale(1);
    opacity: 1;
  }
  &:hover {
    color: ${props => props.hColor};
  }
`;