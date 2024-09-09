import React, { useState, useCallback, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import Tab from "./Tab";

const TabBar = ({ onTabClick, categoryData }) => {
  const categories = [
    { name: "전체", url: "/" },
    { name: "평면예술분과", url: "/flatart" },
    { name: "언행예술분과", url: "/behavior" },
    { name: "종교분과", url: "/religion" },
    { name: "과학분과", url: "/science" },
    { name: "인문사회분과", url: "/society" },
    { name: "스포츠레저분과", url: "/sports" },
    { name: "봉사분과", url: "/service" },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [activeTab, setActiveTab] = useState(currentPath);

  useEffect(() => {
    setActiveTab(currentPath);
  }, [currentPath]);

  const handleTabClick = (tabData) => {
    const clubId = categoryData?.club?.id;
    onTabClick(tabData.url, clubId);
    console.log(clubId);
  };

  return (
    <Wrapper>
      <Container>
        {categories.map((tabData, index) => {
          const isActive =
            tabData.url === "/"
              ? activeTab === "/"
              : activeTab.includes(tabData.url);

          return (
            <Tab
              isActive={isActive}
              onClick={() => handleTabClick(tabData)}
              key={index}
            >
              {tabData.name}
            </Tab>
          );
        })}
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
  overflow-x: auto;

  @media screen and (max-width: 990px) {
    padding: 0 10px;
    overflow-x: scroll;
    justify-content: flex-start;
  }
`;
