import React, { useState, useCallback, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import ContentHeader from "../components/ContentHeader";
import ClubsTabBar from "../components/ClubsTabBar";
import TabBar from "../components/TabBar";
import SearchBar from "../components/SearchBar";
import DetailBtn from "../components/DetailBtn";
import { AxiosCategoryGet, AxiosMainGet } from "../api/AxiosMain";

const TabLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mainData, setMainData] = useState([]);
  const [categoryData, setCategoryData] = useState({
    clubNames: [],
    club: { category: {} },
  });
  const [isLoading, setIsLoading] = useState(true);
  const [idList, setIdList] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    if (location.pathname === "/") {
      fetchMainData();
    } else {
      fetchCategoryData(location.pathname);
    }
  }, [location.pathname]);

  const fetchMainData = async () => {
    try {
      const response = await AxiosMainGet();
      setMainData(response.data.content);
    } catch (error) {
      console.error("Error fetching main data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategoryData = async (url) => {
    if (url === "/") return;

    const baseUrl = url.split("/")[1];

    try {
      const response = await AxiosCategoryGet(baseUrl);
      setCategoryData(response);
      const newIdList = response.clubNames.map((club) => club.id);
      setIdList(newIdList);

      if (!selectedId || !newIdList.includes(selectedId)) {
        setSelectedId(newIdList[0]);
      }
    } catch (error) {
      console.error("Error fetching category data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTabClick = useCallback(
    (url) => {
      const navigateUrl = url !== "/" ? `${url}` : "/";
      navigate(navigateUrl);
    },
    [navigate]
  );

  const renderCategoryContent = () => (
    <>
      <ContentHeader length={"26"} />
      <TabBar onTabClick={handleTabClick} categoryData={categoryData} />
      <ClubsTabBar
        data={categoryData}
        $selectedId={selectedId}
        $setSelectedId={setSelectedId}
      />
      <Outlet context={categoryData} />
    </>
  );

  const renderMainContent = () => (
    <Wrapper>
      <ContentHeader length={"26"} />
      <TabBar onTabClick={handleTabClick} />
      <SearchBar />
      <BtnArea>
        {mainData.map((item, index) => (
          <DetailBtn data={item} key={index} />
        ))}
      </BtnArea>
    </Wrapper>
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {location.pathname === "/"
        ? renderMainContent()
        : renderCategoryContent()}
    </>
  );
};

export default TabLayout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BtnArea = styled.div`
  width: 1122px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 28px 35px;
  @media screen and (max-width: 1150px) {
    width: 736px;
  }
  @media screen and (max-width: 750px) {
    width: 350px;
  }
`;
