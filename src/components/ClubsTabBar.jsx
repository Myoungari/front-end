import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import ClubTab from "./ClubTab";
import { AxiosCategoryNDetailGet } from "../api/AxiosMain";

const ClubsTabBar = ({ data, $selectedId, $setSelectedId }) => {
  const [newData, setNewData] = useState({
    clubNames: [],
    club: { category: {} },
  });

  useEffect(() => {
    setNewData(data);
  }, [data]);

  useEffect(() => {
    if (newData.club.category.name && $selectedId) {
      fetchData();
    }
  }, [$selectedId, newData.club.category.name]);

  const fetchData = async () => {
    try {
      const response = await AxiosCategoryNDetailGet(
        newData.club.category.name,
        $selectedId
      );
      console.log(response);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Wrapper>
      <Container>
        {newData.clubNames &&
          newData.clubNames.map((club, index) => {
            const handleTabClick = () => {
              navigate(`/${newData.club.category.name}/${club.id}`);
              $setSelectedId(club.id);
            };
            const isActive = $selectedId === club.id;
            return (
              <ClubTab
                isActive={isActive}
                $recruiteState={club.recruitmentStatus}
                onClick={() => handleTabClick()}
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
