import React from "react";
import { styled } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import ClubTab from "./ClubTab";

const ClubsTabBar = ({ data }) => {
  console.log(data.data);
  const formedData = data.data.clubNames;
  const categoryType = data.data.club.category.name;
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Wrapper>
      <Container>
        {formedData.map((data, index) => (
          <ClubTab
            isActive={location.pathname === "/:" + data.id}
            $recruiteState={data.recruitmentStatus}
            onClick={() => navigate(`/${categoryType}/${data.id}`)}
            key={index}
          >
            {data.clubName}
          </ClubTab>
        ))}
      </Container>
    </Wrapper>
  );
};

export default ClubsTabBar;

const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  justify-content: center;
  &scroll::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  margin-bottom: 15px;
  display: flex;
  gap: 7px;
  justify-content: center;

  @media screen and (max-width: 990px) {
    padding: 0 10px;
    overflow-x: scroll;
    justify-content: flex-start;
    &scroll::-webkit-scrollbar {
      display: none;
    }
  }
`;
