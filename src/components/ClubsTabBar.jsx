import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import ClubTab from "./ClubTab";

const ClubsTabBar = ({ data }) => {
  const [newData, setNewData] = useState({
    clubNames: [],
    club: { category: {} },
  });

  useEffect(() => {
    setNewData(data);
  }, [data]);

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Wrapper>
      <Container>
        {newData.clubNames &&
          newData.clubNames.map((club, index) => {
            const isActive = location.pathname.split("/")[2] == club.id;
            console.log(isActive);
            console.log(location.pathname.split("/")[2]);
            return (
              <ClubTab
                isActive={isActive}
                $recruiteState={club.recruitmentStatus}
                onClick={() =>
                  navigate(`/${newData.club.category.name}/${club.id}`)
                }
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
