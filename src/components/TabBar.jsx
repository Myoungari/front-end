import React from "react";
import { styled } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import Tab from "./Tab";

const TabBar = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Wrapper>
      <Container>
        {data.map((data, index) => (
          <Tab
            isActive={location.pathname === data.url}
            onClick={() => navigate(data.url)}
            key={index}
          >
            {data.name}
          </Tab>
        ))}
      </Container>
    </Wrapper>
  );
};

export default TabBar;

const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: auto;
  height: auto;
  margin-bottom: 15px;
  display: flex;
  gap: 7px;
  justify-content: center;

  @media screen and (max-width: 990px) {
    padding: 0 10px;
    overflow-x: scroll;
    justify-content: flex-start;
  }
`;
