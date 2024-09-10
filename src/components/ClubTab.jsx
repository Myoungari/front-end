import React from "react";
import { styled } from "styled-components";

const ClubTab = ({ children, onClick, isActive, $recruiteState }) => {
  return (
    <Container
      $recruiteState={$recruiteState}
      $isActive={isActive}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

export default ClubTab;

const Container = styled.div`
  display: inline-flex;
  width: auto;
  height: 41px;
  padding: 8px 20px;
  border-radius: 20px;
  border: 1px solid
    ${({ $recruiteState, $isActive, theme }) =>
      $recruiteState === "Recruiting" ? "#00D115" : "#FFB4B0"};
  align-items: center;
  justify-content: center;
  color: ${({ $recruiteState, $isActive, theme }) =>
    $recruiteState === "Recruiting" ? "#00B828" : "#FF544A"};
  background-color: ${({ $recruiteState, $isActive, theme }) =>
    ($recruiteState === "Recruiting") & $isActive
      ? theme.colors.Sub50
      : ($recruiteState === "Recruited") & $isActive
      ? theme.colors.SubR50
      : theme.colors.WHITE};
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
