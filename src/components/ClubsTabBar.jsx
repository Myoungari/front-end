import React, { useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";
import { activeClubIdState } from "../atoms/activeClubId";
import { styled } from "styled-components";
import ClubTab from "./ClubTab";

const ClubsTabBar = ({ data, onClubSelect }) => {
  const [activeClubId, setActiveClubId] = useRecoilState(activeClubIdState);

  const handleTabClick = useCallback(
    (clubId) => {
      if (activeClubId !== clubId) {
        setActiveClubId(clubId);
        onClubSelect(clubId);
      }
    },
    [activeClubId, setActiveClubId, onClubSelect]
  );

  useEffect(() => {}, [activeClubId]);

  return (
    <Wrapper>
      <Container>
        {data.clubNames?.map((club) => {
          const isActive = activeClubId === club.id;

          return (
            <ClubTab
              key={club.id}
              isActive={isActive}
              $recruiteState={club.recruitmentStatus}
              onClick={() => handleTabClick(club.id)}
            >
              {club.name}
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
