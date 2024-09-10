import React from "react";
import { styled } from "styled-components";

const Tab = ({ children, onClick, isActive }) => {
  return (
    <Container $isActive={isActive} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Tab;

const Container = styled.div`
  display: inline-flex;
  width: auto;
  height: 41px;
  padding: 8px 20px;
  border-radius: 20px;
  border: 1px solid
    ${({ $isActive, theme }) =>
      $isActive ? theme.colors.Primary300 : theme.colors.Neutral100};
  align-items: center;
  justify-content: center;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.WHITE : theme.colors.Neutral300};
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.Primary300 : theme.colors.WHITE};
  font-size: 18px;
  font-weight: 600;
  white-space: nowrap;

  @media ${({ theme }) => theme.device.tablet} {
    height: 39px;
    font-size: 16px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    height: 39px;
    font-size: 14px;
  }
`;
