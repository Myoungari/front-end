import React, { useState, useCallback, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import ContentHeader from "../components/ContentHeader";
import ClubsTabBar from "../components/ClubsTabBar";
import TabBar from "../components/TabBar";
import SearchBar from "../components/SearchBar";
import DetailBtn from "../components/DetailBtn";
import {
  AxiosCategoryGet,
  AxiosMainGet,
  AxiosCategoryNDetailGet,
} from "../api/AxiosMain";

const TabLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mainData, setMainData] = useState([]);
  const [categoryData, setCategoryData] = useState({
    clubNames: [],
    club: { category: {} },
  });
  const [isLoading, setIsLoading] = useState(true);
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
      console.error("메인 데이터 가져오기 오류:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategoryData = async (url) => {
    if (url === "/") return;

    const category = url.split("/")[1];
    const clubId = url.split("/")[2];

    try {
      const categoryResponse = await AxiosCategoryGet(category);
      const newSelectedId = clubId || categoryResponse.clubNames[0]?.id;

      if (newSelectedId) {
        const detailResponse = await AxiosCategoryNDetailGet(
          category,
          newSelectedId
        );
        setCategoryData({
          ...categoryResponse,
          club: detailResponse.club,
        });
        setSelectedId(newSelectedId);
      } else {
        setCategoryData(categoryResponse);
      }
    } catch (error) {
      console.error("카테고리 데이터 가져오기 오류:", error);
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

  const handleClubSelect = useCallback(
    async (clubId) => {
      if (selectedId !== clubId) {
        const category = location.pathname.split("/")[1];
        try {
          const detailResponse = await AxiosCategoryNDetailGet(
            category,
            clubId
          );
          setCategoryData((prevData) => ({
            ...prevData,
            club: detailResponse.club,
          }));
          setSelectedId(clubId);
          navigate(`/${category}/${clubId}`);
        } catch (error) {
          console.error("클럽 데이터 가져오기 오류: ", error);
        }
      }
    },
    [location.pathname, navigate, selectedId]
  );

  const renderCategoryContent = () => (
    <>
      <ContentHeader length={"26"} />
      <TabBar onTabClick={handleTabClick} categoryData={categoryData} />
      <ClubsTabBar
        data={categoryData}
        selectedId={selectedId}
        onClubSelect={handleClubSelect}
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
    return;
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
