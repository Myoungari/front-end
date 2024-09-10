import React from "react";
import { styled } from "styled-components";
import ClubTab from "./ClubTab";

const ClubsTabBar = ({ data, selectedId, onClubSelect }) => {
  return (
    <Wrapper>
      <Container>
        {data.clubNames &&
          data.clubNames.map((club, index) => {
            const handleTabClick = () => {
              onClubSelect(club.id);
            };
            const isActive = selectedId === club.id;
            return (
              <ClubTab
                isActive={isActive}
                $recruiteState={club.recruitmentStatus}
                onClick={handleTabClick}
                key={index}
              >
                {club.clubName}
              </ClubTab>
            );
          })}
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
  &::-webkit-scrollbar {
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
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
